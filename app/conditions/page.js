import Link from "next/link";
import { PageHero } from "../../components/PageHero";

export const metadata = {
  title: "Conditions We Treat | Dr. Kulwant Yadav, Bhiwadi",
  description:
    "Conditions treated by Dr. Kulwant Yadav in Bhiwadi include diabetes, hypertension, obesity, fatty liver, fever, infections, sleep disorders, kidney disease, headaches, and digestive problems.",
};

export default function ConditionsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Conditions we treat"
        title="Medical care for common symptoms, chronic conditions, and complex metabolic concerns."
        description="Patients often search by symptom first. This page is designed to make that easier by grouping the concerns most commonly evaluated at the clinic."
        image="/assets/img/doctor-standing-studio.jpg"
        alt="Dr. Kulwant Yadav for conditions page"
      />

      <section className="section">
        <div className="shell">
          <div className="condition-pills">
            {[
              "Lifestyle diseases",
              "Heart and circulation",
              "Sleep and stress symptoms",
              "Kidney and digestive issues",
              "Fever and respiratory illness",
            ].map((item) => (
              <span key={item} className="pill-link">
                {item}
              </span>
            ))}
          </div>

          <div className="grid three">
            {[
              ["Lifestyle and metabolic diseases", "Common long-term conditions", ["Diabetes", "High blood pressure", "Obesity", "Fatty liver disease", "High cholesterol", "CKM syndrome"]],
              ["Heart and circulation", "Symptoms needing risk review", ["Chest discomfort", "Palpitations", "Breathlessness", "Cardiovascular risk review", "Follow-up after abnormal BP or ECG findings"]],
              ["Mental health and neurology", "Symptoms affecting daily performance", ["Sleep disorders", "Stress-related physical symptoms", "Anxiety with fatigue or palpitations", "Chronic headaches", "Epilepsy"]],
              ["Kidney and digestive health", "Symptoms that often get ignored", ["Chronic kidney disease", "Acidity", "Indigestion", "Bloating", "Loss of appetite"]],
              ["Infection and respiratory illness", "Acute medical concerns", ["Fever", "Weakness and body ache", "Cough and cold", "Throat or chest infections", "Seasonal viral illness"]],
              ["Everyday medical concerns", "General physician support", ["Tiredness and fatigue", "General health checkups", "Recurrent illness", "Unclear symptoms needing evaluation", "Preventive care planning"]],
            ].map(([label, title, items]) => (
              <article key={title} className="condition-card">
                <span className="link-label">{label}</span>
                <h3>{title}</h3>
                <ul>
                  {items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="shell two-col">
          <div className="info-panel">
            <p className="eyebrow light">When to seek urgent attention</p>
            <h2>Some symptoms should not wait for a routine appointment.</h2>
            <p>
              If you or a family member has severe chest pain, sudden breathing difficulty,
              confusion, seizure, fainting, or sudden weakness on one side of the body, please seek
              urgent medical help immediately.
            </p>
          </div>

          <div className="section-card">
            <p className="eyebrow">Care philosophy</p>
            <h2>Not every symptom is serious, but persistent symptoms deserve proper evaluation.</h2>
            <p>
              Early medical attention often prevents bigger problems later, especially when
              diabetes, BP, weight issues, stress, and poor sleep are all interacting together.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div className="cta-panel">
            <p className="eyebrow light">Need help identifying the right care?</p>
            <h2>Book a consultation for persistent symptoms, preventive screening, or long-term disease follow-up.</h2>
            <div className="cta-row" style={{ marginTop: "1.2rem" }}>
              <Link className="btn btn-primary" href="/contact">
                Book Appointment
              </Link>
              <Link className="btn btn-secondary" href="/faq">
                Read FAQs
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
