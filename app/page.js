import Link from "next/link";

export default function HomePage() {
  return (
    <main>
      <section className="home-hero">
        <div className="shell home-hero-inner">
          <div className="home-banner">
            <div className="hero-layout hero-layout-home">
              <div className="home-banner-copy hero-primary">
                <p className="eyebrow light">Medicine Square by Dr. Kulwant Yadav</p>
                <div className="hero-topline">
                  <span className="hero-badge">Consultant Internal Medicine</span>
                  <span className="hero-badge hero-badge-soft">Bhiwadi | South Haryana</span>
                </div>
                <h1>
                  Evidence-based physician care for diabetes, BP, infections, fatigue, and
                  preventive health.
                </h1>
                <p className="hero-lead">
                  Thoughtful internal medicine care for patients who want clear answers, practical
                  treatment plans, and long-term support that fits real daily life.
                </p>
                <div className="hero-actions">
                  <Link className="btn btn-primary" href="/contact">
                    Book Appointment
                  </Link>
                  <Link className="btn btn-secondary" href="/services">
                    Explore Services
                  </Link>
                </div>
                <ul className="hero-trust-list hero-trust-list-compact">
                  <li>Diabetes, BP, obesity, and fatty liver management</li>
                  <li>Preventive checkups, ECG review, and long-term follow-up</li>
                  <li>Fever, infections, respiratory illness, and urgent assessment</li>
                </ul>
              </div>

              <div className="hero-visual-stack">
                <div className="hero-stage hero-stage-home">
                  <img
                    className="stage-photo stage-photo-hero"
                    src="/assets/img/doctor-portrait-seated-studio.jpg"
                    alt="Dr. Kulwant Yadav seated in clinical portrait"
                  />
                </div>
                <div className="hero-appointment-card">
                  <p className="eyebrow">Why patients book</p>
                  <h2>Need the right physician without the confusion?</h2>
                  <p>
                    Book for chronic disease follow-up, metabolic screening, everyday illness, and
                    preventive care with a calm, evidence-based approach.
                  </p>
                  <div className="hero-card-actions">
                    <Link className="btn btn-dark" href="/about">
                      Meet Dr. Kulwant
                    </Link>
                    <Link className="text-link" href="/contact">
                      Contact the Clinic
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div className="section-heading">
            <p className="eyebrow">Quick links</p>
            <h2>Start with the kind of care you need most.</h2>
            <p>
              Inspired by high-clarity healthcare websites, these quick routes make it easier for
              patients to identify the right next step.
            </p>
          </div>

          <div className="quick-link-grid">
            {[
              ["Lifestyle care", "Diabetes and BP Management", "Structured long-term support for blood sugar, blood pressure, weight, and metabolic health.", "/services"],
              ["Prevention", "Preventive Health Checkups", "Identify silent risks early with physician-guided screening and follow-up planning.", "/services"],
              ["Acute care", "Fever, Infections, and Weakness", "Get timely evaluation for everyday medical illnesses that still need proper clinical judgment.", "/conditions"],
              ["Metabolic health", "Weight Loss and Fatty Liver Care", "Medical support for obesity, unhealthy weight gain, fatty liver, and related risk factors.", "/services"],
              ["Heart review", "ECG and Risk Assessment", "Useful for chest discomfort, palpitations, BP evaluation, and cardiovascular risk review.", "/services"],
              ["Consult", "Contact the Clinic", "Reach out for appointments, online profile links, and consultation guidance.", "/contact"],
            ].map(([label, title, text, href]) => (
              <Link key={title} className="quick-link-card" href={href}>
                <span className="link-label">{label}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="shell">
          <div className="doctor-profile">
            <div className="portrait-stage">
              <img
                className="stage-photo"
                src="/assets/img/doctor-portrait-seated-studio.jpg"
                alt="Dr. Kulwant Yadav seated portrait with studio background"
              />
            </div>

            <div className="profile-card section-card">
              <p className="eyebrow">About Dr. Kulwant Yadav</p>
              <h2>Calm, evidence-based care for everyday symptoms and long-term disease control.</h2>
              <p>
                Dr. Kulwant Yadav is a Consultant in Internal Medicine with training across general
                medicine, emergency care, critical care, and community mental health. His work
                focuses on the kinds of problems people in Bhiwadi commonly delay until they become
                harder to manage: diabetes, BP, obesity, poor sleep, stress-related symptoms, fatty
                liver, weakness, and repeated infections.
              </p>
              <p>
                Patients appreciate his simple explanations, practical care plans, and balanced
                approach to both acute illness and prevention.
              </p>
              <div className="focus-pills">
                <span>MBBS, DNB General Medicine</span>
                <span>FRCEM (Primary)</span>
                <span>NIMHANS Mental Health Diploma</span>
              </div>
              <div className="section-actions" style={{ marginTop: "1.4rem" }}>
                <Link className="btn btn-dark" href="/about">
                  Full Profile
                </Link>
              </div>
            </div>
          </div>

          <div className="metrics-grid" style={{ marginTop: "1.6rem" }}>
            {[
              ["2008", "MBBS Completion"],
              ["DNB", "General Medicine"],
              ["AHA", "BLS and ACLS Certified"],
              ["Bhiwadi", "Local Physician Access"],
            ].map(([value, label]) => (
              <article key={label} className="stat-card">
                <strong>{value}</strong>
                <span>{label}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div className="section-heading">
            <p className="eyebrow">Clinical focus</p>
            <h2>Specialty-led internal medicine, adapted for real local health needs.</h2>
            <p>
              The strongest cue borrowed from leading healthcare sites is clarity: patients should
              quickly see what is treated, how care is organised, and where they fit in.
            </p>
          </div>

          <div className="service-pills">
            {[
              "Lifestyle disease care",
              "Heart and metabolic review",
              "Sleep and stress support",
              "Kidney and digestive health",
              "Infection and respiratory care",
            ].map((item) => (
              <span key={item} className="pill-link">
                {item}
              </span>
            ))}
          </div>

          <div className="grid three">
            {[
              ["Lifestyle diseases", "Diabetes, BP, obesity, and fatty liver", "Care plans focused on monitoring, medicine review, routine correction, and prevention of heart and kidney complications."],
              ["Cardiometabolic care", "Heart risk and CKM syndrome review", "Assessment of blood pressure, cholesterol, ECG findings, chest symptoms, and long-term cardiovascular risk."],
              ["Mind-body health", "Sleep issues, stress, anxiety, headaches", "Evaluation of sleep disturbance, tiredness, stress-related symptoms, chronic headaches, and related concerns."],
              ["Digestive and kidney care", "CKD, acidity, indigestion, bloating", "Focused assessment when digestive or kidney symptoms begin affecting quality of life or treatment planning."],
              ["Infections", "Fever, cough, seasonal illness, weakness", "Prompt medical review for symptoms that seem common but still need proper diagnosis and recovery advice."],
              ["Urgent medicine", "Emergency-aware clinical judgement", "Support shaped by emergency and critical care exposure, useful when symptoms need timely escalation decisions."],
            ].map(([label, title, text]) => (
              <article key={title} className="service-card">
                <span className="link-label">{label}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>

          <div className="section-actions" style={{ marginTop: "1.7rem" }}>
            <Link className="btn btn-primary" href="/services">
              View Full Services
            </Link>
            <Link className="btn btn-dark" href="/conditions">
              Conditions We Treat
            </Link>
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="shell two-col">
          <div className="info-panel">
            <p className="eyebrow light">Why patients choose this clinic</p>
            <h2>Less confusion. Better continuity. More practical care.</h2>
            <ul className="check-list">
              <li>Simple explanations without overwhelming jargon</li>
              <li>Useful for patients managing more than one long-term condition together</li>
              <li>Strong preventive approach for industrial workers and busy families</li>
              <li>Holistic attention to sleep, stress, routine, and daily habits</li>
              <li>Ongoing research interest in MASLD and metabolic disease</li>
            </ul>
          </div>

          <div>
            <div className="quote-card">
              <p className="eyebrow">Patient experience</p>
              <h3>Warm consultations with practical guidance</h3>
              <p>“Dr. Kulwant explained my sugar and BP treatment very clearly. I felt heard and not rushed.”</p>
              <cite>Rakesh S., Bhiwadi</cite>
            </div>
            <div className="quote-card" style={{ marginTop: "1rem" }}>
              <p className="eyebrow">Research and expertise</p>
              <h3>Academic depth that supports everyday patient care</h3>
              <p>
                His work includes ongoing MASLD interest, cardiology and critical care
                publications, and a DNB thesis focused on diabetes and heart health.
              </p>
              <Link className="text-link" href="/about#research">
                See credentials and research
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div className="cta-panel">
            <p className="eyebrow light">Book a consultation</p>
            <h2>
              Looking for a physician in Bhiwadi who combines medical depth with a calm,
              patient-friendly approach?
            </h2>
            <p>
              Schedule a consultation for diabetes, BP, fatigue, fever, infections, sleep
              concerns, preventive screening, and long-term chronic disease care.
            </p>
            <div className="cta-row" style={{ marginTop: "1.2rem" }}>
              <Link className="btn btn-primary" href="/contact">
                Book Appointment
              </Link>
              <a
                className="btn btn-secondary"
                href="https://share.google/NRSnun2Z3rW8XpbU5"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Google Profile
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
