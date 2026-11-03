import { Resend } from "resend";
import ContactEmail, { type ContactEmailProps } from "../emails/ContactEmail.js";

const FROM = "DALABA PRODUCTIONS <contact@dalaba-productions.com>";
const TO = process.env.CONTACT_TO_EMAIL || "contacts@dalaba-productions.com";

const LIMITS: Record<keyof ContactEmailProps, number> = {
  firstName: 100,
  lastName: 100,
  email: 200,
  subject: 200,
  service: 100,
  message: 5000,
};
const REQUIRED: (keyof ContactEmailProps)[] = ["firstName", "lastName", "email", "subject", "message"];
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function json(status: number, data: unknown) {
  return Response.json(data, { status });
}

function parse(input: unknown): ContactEmailProps | string {
  if (!input || typeof input !== "object") return "Requête invalide.";
  const raw = input as Record<string, unknown>;
  const fields = {} as Record<keyof ContactEmailProps, string>;

  for (const key of Object.keys(LIMITS) as (keyof ContactEmailProps)[]) {
    const value = typeof raw[key] === "string" ? (raw[key] as string).trim() : "";
    if (REQUIRED.includes(key) && !value) return "Merci de remplir tous les champs requis.";
    if (value.length > LIMITS[key]) return "Un des champs est trop long.";
    fields[key] = value;
  }
  if (!EMAIL_RE.test(fields.email)) return "Adresse e-mail invalide.";

  return { ...fields, service: fields.service || undefined };
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return json(500, { error: "Service d'envoi non configuré." });

  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return json(400, { error: "Requête invalide." });
  }

  // Honeypot: bots fill the hidden "website" field, humans never see it
  if (payload && typeof payload === "object" && (payload as Record<string, unknown>).website) {
    return json(200, { ok: true });
  }

  const data = parse(payload);
  if (typeof data === "string") return json(400, { error: data });

  const { error } = await new Resend(apiKey).emails.send({
    from: FROM,
    to: [TO],
    replyTo: data.email,
    subject: `[Site] ${data.subject}`,
    react: ContactEmail(data),
  });

  if (error) {
    console.error("Resend error", error);
    return json(502, { error: "L'envoi a échoué. Merci de réessayer plus tard." });
  }

  return json(200, { ok: true });
}
