import { createElement as h } from "react";
import { Body, Container, Head, Hr, Html, Img, Preview, Section, Text } from "@react-email/components";

// Plain .ts (createElement instead of JSX): Vercel's function bundler does not
// compile .tsx files imported from /api.

export type ContactEmailProps = {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  service?: string;
  message: string;
};

const SITE_URL = "https://www.dalaba-productions.com";

export default function ContactEmail({ firstName, lastName, email, subject, service, message }: ContactEmailProps) {
  const rows: [string, string][] = [
    ["Nom", `${firstName} ${lastName}`],
    ["E-mail", email],
    ["Objet", subject],
  ];
  if (service) rows.push(["Service", service]);

  return h(
    Html,
    { lang: "fr" },
    h(Head),
    h(Preview, null, `Nouveau message de ${firstName} ${lastName} : ${subject}`),
    h(
      Body,
      { style: body },
      h(
        Container,
        { style: container },
        h(
          Section,
          { style: header },
          h(Img, { src: `${SITE_URL}/logo-email.png`, width: "200", height: "69", alt: "DALABA Productions" }),
        ),
        h(
          Section,
          { style: content },
          h(Text, { style: title }, "Nouveau message depuis le site"),
          h(
            Text,
            { style: intro },
            "Une demande de contact a été envoyée via le formulaire de dalaba-productions.com.",
          ),
          ...rows.map(([label, value]) =>
            h(
              Section,
              { key: label, style: row },
              h(Text, { style: rowLabel }, label),
              h(Text, { style: rowValue }, value),
            ),
          ),
          h(Hr, { style: hr }),
          h(Text, { style: rowLabel }, "Message"),
          h(Text, { style: messageText }, message),
          h(Hr, { style: hr }),
          h(Text, { style: footnote }, `Répondez directement à cet e-mail pour écrire à ${firstName} (${email}).`),
        ),
        h(
          Section,
          { style: footer },
          h(Text, { style: footerText }, "DALABA PRODUCTIONS · Conakry, République de Guinée"),
          h(Text, { style: footerText }, "+224 625 31 35 31 · contacts@dalabaprod.com"),
        ),
      ),
    ),
  );
}

ContactEmail.PreviewProps = {
  firstName: "Aminata",
  lastName: "Camara",
  email: "aminata@example.com",
  subject: "Tournage d'un film institutionnel",
  service: "PRODUCTION AUDIOVISUELLE",
  message: "Bonjour,\nNous souhaitons réaliser une vidéo de présentation pour notre entreprise.",
} satisfies ContactEmailProps;

const font = "-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif";

const body = { backgroundColor: "#f2f2f2", fontFamily: font, margin: 0, padding: "32px 0" };
const container = { backgroundColor: "#ffffff", maxWidth: "600px", margin: "0 auto" };
const header = { backgroundColor: "#161616", padding: "32px 40px" };
const content = { padding: "36px 40px 12px" };
const title = { color: "#161616", fontSize: "22px", fontWeight: 700, margin: "0 0 8px" };
const intro = { color: "#5a5a5a", fontSize: "14px", lineHeight: "22px", margin: "0 0 24px" };
const row = { marginBottom: "14px" };
const rowLabel = {
  color: "#9a9a9a",
  fontSize: "11px",
  fontWeight: 700,
  letterSpacing: "0.08em",
  textTransform: "uppercase" as const,
  margin: "0 0 2px",
};
const rowValue = { color: "#161616", fontSize: "15px", lineHeight: "22px", margin: 0 };
const messageText = {
  color: "#161616",
  fontSize: "15px",
  lineHeight: "24px",
  whiteSpace: "pre-wrap" as const,
  margin: "4px 0 0",
};
const hr = { borderColor: "#e5e5e5", margin: "24px 0" };
const footnote = { color: "#9a9a9a", fontSize: "13px", margin: "0 0 24px" };
const footer = { backgroundColor: "#161616", padding: "20px 40px" };
const footerText = { color: "#9a9a9a", fontSize: "12px", lineHeight: "18px", margin: 0 };
