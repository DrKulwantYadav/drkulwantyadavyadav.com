import Link from "next/link";
import { footerFocusAreas, navItems, siteMeta } from "../lib/siteData";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell footer-panel">
        <div className="footer-branding">
          <div className="footer-brand">
            <div>
              <img
                className="footer-wordmark"
                src="/assets/img/drkulwant-logo-full.png"
                alt="Medicine Square by Dr. Kulwant Yadav logo"
              />
              <h3>{siteMeta.clinicName}</h3>
              <p>
                {siteMeta.doctorName} provides patient-friendly internal medicine care for diabetes,
                BP, infections, fatigue, preventive health, and long-term disease management in
                Bhiwadi.
              </p>
            </div>
          </div>
          <div className="footer-badges">
            <span>Internal Medicine</span>
            <span>Preventive Health</span>
            <span>Emergency Perspective</span>
          </div>
        </div>

        <div className="footer-column">
          <h3>Explore</h3>
          <div className="footer-links">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="footer-column">
          <h3>Focus Areas</h3>
          <div className="footer-links">
            {footerFocusAreas.map((item) => (
              <Link key={item.label} href={item.href}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="footer-column">
          <h3>Contact</h3>
          <p>
            Bhiwadi, Rajasthan
            <br />
            Serving Bhiwadi and South Haryana
          </p>
          <p>
            <a href={`mailto:${siteMeta.email}`}>{siteMeta.email}</a>
          </p>
          <p>WhatsApp number to be added</p>
          <div className="social-grid">
            <a href={siteMeta.instagram} target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
            <a href={siteMeta.youtube} target="_blank" rel="noopener noreferrer">
              YouTube
            </a>
            <a href={siteMeta.facebook} target="_blank" rel="noopener noreferrer">
              Facebook
            </a>
            <a href={siteMeta.google} target="_blank" rel="noopener noreferrer">
              Google
            </a>
          </div>
        </div>
      </div>
      <div className="shell footer-bottom">
        <p>
          Medical information on this website is for general awareness and does not replace direct
          consultation or emergency care.
        </p>
      </div>
    </footer>
  );
}
