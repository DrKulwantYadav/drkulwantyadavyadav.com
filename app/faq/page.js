import Link from "next/link";
import { PageHero } from "../../components/PageHero";

export const metadata = {
  title: "FAQ | Dr. Kulwant Yadav, Internal Medicine Doctor in Bhiwadi",
  description:
    "Frequently asked questions about consultations, diabetes, BP, preventive checkups, ECG, sleep issues, and when to see Dr. Kulwant Yadav in Bhiwadi.",
};

export default function FaqPage() {
  return (
    <main>
      <PageHero
        eyebrow="Frequently asked questions"
        title="Simple answers to the questions patients ask most often."
        description="This page is intentionally written in plain language so new patients can quickly understand when to consult an internal medicine doctor and what kind of care to expect."
        image="/assets/img/doctor-arms-crossed-studio.jpg"
        alt="Dr. Kulwant Yadav portrait for FAQ page"
      />

      <section className="section">
        <div className="shell faq-list">
          {[
            ["Do I need an internal medicine doctor for diabetes or BP?", "Yes. Internal medicine specialists are trained to manage chronic conditions like diabetes and hypertension, especially when treatment needs regular follow-up and complication prevention."],
            ["Can I consult for fever, weakness, cough, or everyday health problems?", "Yes. The clinic evaluates both common day-to-day medical problems and long-term illnesses. Many patients visit for fever, fatigue, cough, acidity, poor sleep, and recurring infections."],
            ["Do you treat obesity, fatty liver, and lifestyle-related issues?", "Yes. Medical support is available for obesity, fatty liver, metabolic syndrome, unhealthy routines, and related lifestyle diseases that increase heart and kidney risk over time."],
            ["Is ECG available as part of evaluation?", "Yes. ECG may be advised when needed for palpitations, chest discomfort, BP assessment, or broader cardiovascular risk review."],
            ["Can sleep problems and stress-related symptoms be discussed in consultation?", "Yes. Poor sleep, stress, anxiety-related physical symptoms, tiredness, and routine disruption can be evaluated as part of your overall health picture."],
            ["When should I seek urgent care instead of waiting for an appointment?", "Seek urgent medical attention immediately for severe chest pain, sudden breathing difficulty, seizure, fainting, sudden weakness, confusion, or loss of consciousness."],
            ["Do you offer preventive health checkups?", "Yes. Preventive screening helps detect silent problems such as high blood sugar, BP, cholesterol, liver issues, kidney disease, and long-term metabolic risk early."],
          ].map(([question, answer], index) => (
            <details key={question} className="faq-item" open={index === 0}>
              <summary>{question}</summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="section section-dark">
        <div className="shell two-col">
          <div className="section-card">
            <p className="eyebrow">Useful before your visit</p>
            <h2>What to bring if you have long-term medical conditions</h2>
            <ul className="check-list">
              <li>Recent test reports if available</li>
              <li>Current medicine list or prescriptions</li>
              <li>BP or sugar records if you track them</li>
              <li>Questions about symptoms, routine, diet, or side effects</li>
            </ul>
          </div>
          <div className="info-panel">
            <p className="eyebrow light">Still unsure?</p>
            <h2>If symptoms are persistent, it is worth getting them checked.</h2>
            <p>
              Many issues like fatigue, poor sleep, acidity, weight gain, and repeated infection
              seem minor at first but may be linked to larger metabolic or lifestyle patterns.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div className="cta-panel">
            <p className="eyebrow light">Still have a question?</p>
            <h2>Reach out for consultation guidance or appointment support.</h2>
            <div className="cta-row" style={{ marginTop: "1.2rem" }}>
              <Link className="btn btn-primary" href="/contact">
                Contact the Clinic
              </Link>
              <a className="btn btn-secondary" href="mailto:drkulwantyadavmedicine@gmail.com">
                Email Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
