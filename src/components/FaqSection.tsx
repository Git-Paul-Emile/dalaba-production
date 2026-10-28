import { services } from "./assets";

const faqs = [
  {
    question: "Quels services propose DALABA Productions ?",
    answer: `L’agence propose notamment la ${services[0].toLowerCase()}, le cinéma et la fiction, la création et le design, la communication numérique et l’événementiel.`,
  },
  {
    question: "Où se trouve DALABA Productions ?",
    answer: "DALABA Productions est basée à Conakry, en République de Guinée.",
  },
  {
    question: "Comment contacter DALABA Productions ?",
    answer: "Appelez le +224 625 31 35 31 ou écrivez à contacts@dalabaprod.com.",
  },
];

export function FaqSection() {
  return (
    <section
      aria-labelledby="faq-heading"
      className="mx-auto w-full max-w-[1440px] px-6 py-20 sm:px-10 lg:px-[115px]"
    >
      <h2 id="faq-heading" className="text-[28px] leading-tight text-[#161616]" style={{ fontWeight: 500 }}>
        Questions fréquentes
      </h2>
      <div className="mt-8 divide-y divide-[#dedede] border-y border-[#dedede]">
        {faqs.map(({ question, answer }) => (
          <details key={question} className="py-5">
            <summary className="cursor-pointer text-[18px] text-[#161616] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#161616]">
              {question}
            </summary>
            <p className="mt-4 max-w-3xl text-[16px] leading-relaxed text-[#454545]">{answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
