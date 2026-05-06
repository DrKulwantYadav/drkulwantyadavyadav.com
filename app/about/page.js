import Link from "next/link";
import { PageHero } from "../../components/PageHero";

export const metadata = {
  title: "About Dr. Kulwant Yadav | Internal Medicine Specialist in Bhiwadi",
  description:
    "Learn about Dr. Kulwant Yadav's qualifications, internal medicine expertise, emergency care background, research focus, and patient-centred approach in Bhiwadi.",
};

export default function AboutPage() {
  return (
    <main>
      <PageHero
        eyebrow="About the doctor"
        title="Experienced internal medicine care with a calm, preventive, and highly practical approach."
        description="Dr. Kulwant Yadav serves patients from Bhiwadi and the South Haryana belt with evidence-based medical care shaped around modern lifestyle disease patterns, everyday illness, and the need for long-term follow-up."
        image="/assets/img/doctor-standing-studio.jpg"
        alt="Dr. Kulwant Yadav standing portrait on styled background"
        actions={
          <>
            <Link className="btn btn-primary" href="/contact">
              Book Appointment
            </Link>
            <Link className="btn btn-secondary" href="/services">
              Explore Services
            </Link>
          </>
        }
      />

      <section className="section">
        <div className="shell two-col">
          <div className="section-card">
            <p className="eyebrow">Professional overview</p>
            <h2>Internal medicine that respects both science and real life.</h2>
            <p>
              Dr. Kulwant Yadav is a Consultant in Internal Medicine with a strong background in
              general medicine, emergency care, and critical care. He supports patients with
              diabetes, hypertension, obesity, fatty liver, fever, infections, digestive concerns,
              kidney-related issues, sleep disturbance, and stress-related symptoms.
            </p>
            <p>
              His consultations are designed to bring clarity. Patients are guided through
              diagnosis, investigations, treatment options, and long-term prevention in simple
              language that makes the plan easier to follow.
            </p>
            <p>He is also associated with Gopinath Hospital, Bhiwadi, as an Honorary Consultant.</p>
          </div>

          <div className="info-panel">
            <p className="eyebrow light">Clinical strengths</p>
            <h2>Where his expertise is especially useful</h2>
            <ul className="check-list">
              <li>Lifestyle disease control in patients with busy work routines</li>
              <li>Preventive and metabolic care for long-term risk reduction</li>
              <li>Emergency-aware judgment when symptoms need timely escalation</li>
              <li>Care that considers sleep, stress, and mental wellbeing alongside physical illness</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="shell">
          <div className="section-heading">
            <p className="eyebrow">Education and credentials</p>
            <h2>Training across medicine, emergency care, and community mental health.</h2>
          </div>

          <div className="timeline">
            {[
              ["2008", "MBBS", "U.P. University of Medical Sciences, Saifai"],
              ["Postgraduate", "DNB General Medicine", "National Board of Examinations in Medical Sciences, New Delhi"],
              ["2018", "Diploma in Community Mental Health", "NIMHANS, Bengaluru"],
              ["2019", "FRCEM (Primary)", "Royal College of Emergency Medicine, UK"],
            ].map(([year, title, text]) => (
              <article key={title} className="timeline-item">
                <span className="timeline-year">{year}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div className="metrics-grid">
            {[
              ["BLS", "American Heart Association"],
              ["ACLS", "American Heart Association"],
              ["MASLD", "Ongoing research interest"],
              ["DNB", "Thesis on diabetes and heart health"],
            ].map(([value, label]) => (
              <article key={label} className="stat-card">
                <strong>{value}</strong>
                <span>{label}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-dark" id="research">
        <div className="shell two-col">
          <div className="section-card">
            <p className="eyebrow">Research and expertise</p>
            <h2>Academic depth that supports better patient decisions.</h2>
            <p>
              Dr. Kulwant Yadav's academic profile includes ongoing work related to MASLD and
              Saroglitazar, along with publications in critical care and cardiology. His DNB thesis
              explored the relationship between diabetes and heart health, reflecting a strong
              interest in metabolic disease and long-term complication prevention.
            </p>
            <p>
              For patients, this translates into treatment that is grounded in updated knowledge
              and not just routine symptom relief.
            </p>
          </div>

          <div className="section-card">
            <p className="eyebrow">Patient approach</p>
            <h2>Clear guidance, not rushed medicine.</h2>
            <p>
              The aim of each consultation is not only to prescribe treatment, but also to help
              patients understand what is happening, what needs monitoring, and how lifestyle
              changes fit into the medical plan.
            </p>
            <p>
              This is especially important for patients living with more than one condition at
              once, such as diabetes plus BP, obesity plus fatty liver, or poor sleep plus chronic
              fatigue.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
