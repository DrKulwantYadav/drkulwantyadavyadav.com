import Link from "next/link";
import { PageHero } from "../../components/PageHero";

export const metadata = {
  title: "Services | Dr. Kulwant Yadav, Physician in Bhiwadi",
  description:
    "Explore services by Dr. Kulwant Yadav in Bhiwadi including diabetes care, BP management, preventive checkups, ECG, weight loss support, fever treatment, and chronic disease management.",
};

export default function ServicesPage() {
  return (
    <main>
      <PageHero
        eyebrow="Services and diagnostics"
        title="Care pathways designed for prevention, diagnosis, and long-term disease control."
        description="The clinic structure takes cues from large, trusted healthcare websites: make services easy to understand, group them clearly, and help patients know when each service matters."
        image="/assets/img/doctor-pointing-studio.jpg"
        alt="Dr. Kulwant Yadav pointing toward service information"
      />

      <section className="section">
        <div className="shell">
          <div className="section-heading">
            <p className="eyebrow">Focus areas</p>
            <h2>High-value medical services for the most common concerns seen in Bhiwadi.</h2>
          </div>

          <div className="service-pills">
            {[
              "Diabetes management",
              "Hypertension care",
              "Weight loss support",
              "Preventive checkups",
              "ECG and heart review",
              "Sleep and stress counselling",
            ].map((item) => (
              <span key={item} className="pill-link">
                {item}
              </span>
            ))}
          </div>

          <div className="grid two">
            {[
              ["Metabolic care", "Diabetes management", "Support for diagnosis, treatment planning, medicine review, sugar monitoring, and complication prevention involving heart, kidney, nerve, and eye health."],
              ["Cardiovascular care", "Hypertension management", "Evaluation and long-term management of high blood pressure with attention to heart risk, kidney protection, and medication adherence."],
              ["Lifestyle medicine", "Medical weight loss programs", "Doctor-guided care for obesity, unhealthy weight gain, fatty liver, and cardiometabolic risk linked to routine and diet patterns."],
              ["Prevention", "Preventive health checkups", "Targeted screening for silent risks such as diabetes, BP, high cholesterol, liver issues, kidney disease, and long-term metabolic complications."],
              ["Diagnostics", "Metabolic screening", "Assessment of obesity, fatty liver, CKM syndrome, blood sugar imbalance, and related markers affecting long-term health planning."],
              ["Continuity", "Chronic disease management", "Ongoing care for long-standing conditions that need regular review, monitoring, medicine adjustment, and practical patient education."],
              ["Mind-body health", "Lifestyle and sleep counselling", "Medical guidance for stress, fatigue, sleep disturbance, irregular routine, and health habits that affect blood sugar, BP, and overall wellbeing."],
              ["Heart risk", "ECG and cardiovascular evaluation", "Support for chest discomfort, palpitations, BP review, breathlessness, and broader cardiovascular risk assessment."],
              ["Acute illness", "Fever and infection care", "Diagnosis and treatment planning for fever, viral illness, cough, throat infection, respiratory symptoms, weakness, and recovery-related concerns."],
              ["Digestive and kidney health", "Kidney and digestive care", "Assessment of chronic kidney disease, acidity, indigestion, bloating, appetite changes, and digestive discomfort affecting daily life."],
            ].map(([label, title, text]) => (
              <article key={title} className="service-card">
                <span className="link-label">{label}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="shell two-col">
          <div className="section-card">
            <p className="eyebrow">What patients can expect</p>
            <h2>A service model designed around clarity and follow-up.</h2>
            <ul className="check-list">
              <li>Simple explanation of diagnosis and likely causes</li>
              <li>Focused testing only when clinically useful</li>
              <li>Practical changes to food, activity, sleep, and routine</li>
              <li>Ongoing follow-up for conditions that need continuity</li>
            </ul>
          </div>

          <div className="info-panel">
            <p className="eyebrow light">Why this matters locally</p>
            <h2>Many patients in the region are managing more than one health issue at once.</h2>
            <p>
              In Bhiwadi's industrial and family population, delayed checkups, irregular meals,
              poor sleep, and work stress often overlap with diabetes, BP, obesity, and fatigue.
              These services are designed to address that pattern in an organised way.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div className="cta-panel">
            <p className="eyebrow light">Ready to consult?</p>
            <h2>
              Book for preventive care, chronic disease follow-up, or everyday symptoms that need
              proper medical review.
            </h2>
            <div className="cta-row" style={{ marginTop: "1.2rem" }}>
              <Link className="btn btn-primary" href="/contact">
                Book Appointment
              </Link>
              <Link className="btn btn-secondary" href="/conditions">
                See Conditions Treated
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
