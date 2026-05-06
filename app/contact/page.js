import Link from "next/link";
import { PageHero } from "../../components/PageHero";

export const metadata = {
  title: "Contact | Dr. Kulwant Yadav, Best Physician in Bhiwadi",
  description:
    "Book a consultation with Dr. Kulwant Yadav in Bhiwadi for diabetes, BP, infections, preventive care, and internal medicine follow-up. Contact by email or social platforms.",
};

export default function ContactPage() {
  return (
    <main>
      <PageHero
        eyebrow="Contact and appointments"
        title="Book a consultation for trusted internal medicine care in Bhiwadi."
        description="Consult for diabetes, hypertension, weight-related concerns, fever, fatigue, sleep issues, preventive care, and ongoing chronic disease management."
        image="/assets/img/doctor-pointing-studio.jpg"
        alt="Dr. Kulwant Yadav ready to consult patients"
      />

      <section className="section">
        <div className="shell contact-grid">
          <div className="info-panel">
            <p className="eyebrow light">Get in touch</p>
            <h2>Clinic contact details</h2>
            <ul className="contact-list">
              <li><strong>Doctor:</strong> Dr. Kulwant Yadav</li>
              <li><strong>Specialty:</strong> Consultant Internal Medicine</li>
              <li><strong>Location:</strong> Bhiwadi, Rajasthan</li>
              <li><strong>Region served:</strong> Bhiwadi and South Haryana</li>
              <li>
                <strong>Email:</strong>{" "}
                <a href="mailto:drkulwantyadavmedicine@gmail.com">drkulwantyadavmedicine@gmail.com</a>
              </li>
              <li><strong>WhatsApp:</strong> Number to be added</li>
            </ul>
            <div className="cta-row" style={{ marginTop: "1.2rem" }}>
              <a className="btn btn-primary" href="mailto:drkulwantyadavmedicine@gmail.com">
                Request Appointment
              </a>
              <a
                className="btn btn-secondary"
                href="https://share.google/NRSnun2Z3rW8XpbU5"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google Profile
              </a>
            </div>
          </div>

          <div className="contact-card">
            <p className="eyebrow">Follow online</p>
            <h2>Stay connected with the clinic</h2>
            <div className="social-grid">
              <a href="https://www.instagram.com/drkulwantyadavmedicine" target="_blank" rel="noopener noreferrer">Instagram</a>
              <a href="https://youtube.com/@medicinesquarebydrkulwant" target="_blank" rel="noopener noreferrer">YouTube</a>
              <a href="https://www.facebook.com/share/1EDnNWKTW1/" target="_blank" rel="noopener noreferrer">Facebook</a>
              <a href="https://share.google/NRSnun2Z3rW8XpbU5" target="_blank" rel="noopener noreferrer">Google</a>
            </div>
            <p className="microcopy" style={{ marginTop: "1.2rem" }}>
              For severe chest pain, breathing difficulty, seizure, fainting, or sudden confusion,
              please seek emergency medical care immediately.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="shell two-col">
          <div className="section-card">
            <p className="eyebrow">What patients commonly consult for</p>
            <h2>Most frequent reasons people book appointments</h2>
            <ul className="check-list">
              <li>Diabetes, high BP, obesity, and fatty liver</li>
              <li>Repeated fever, cough, weakness, and infections</li>
              <li>Chest discomfort, palpitations, and heart risk concerns</li>
              <li>Sleep problems, stress-related symptoms, and fatigue</li>
              <li>Kidney issues, acidity, indigestion, and digestive symptoms</li>
            </ul>
          </div>
          <div className="section-card">
            <p className="eyebrow">Before you reach out</p>
            <h2>It helps to mention the main concern when requesting an appointment.</h2>
            <p>
              If you are booking for a long-term condition, recent reports and your current
              medicine list can make the first consultation more useful and focused.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
