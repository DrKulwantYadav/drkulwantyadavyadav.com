const siteMeta = {
  doctorName: "Dr. Kulwant Yadav",
  clinicName: "Medicine Square",
  email: "drkulwantyadavmedicine@gmail.com",
  google: "https://share.google/NRSnun2Z3rW8XpbU5",
  instagram: "https://www.instagram.com/drkulwantyadavmedicine",
  youtube: "https://youtube.com/@medicinesquarebydrkulwant",
  facebook: "https://www.facebook.com/share/1EDnNWKTW1/"
};

const navItems = [
  { label: "Home", href: "index.html", key: "home" },
  { label: "About", href: "about.html", key: "about" },
  { label: "Services", href: "services.html", key: "services" },
  { label: "Conditions", href: "conditions.html", key: "conditions" },
  { label: "FAQ", href: "faq.html", key: "faq" },
  { label: "Contact", href: "contact.html", key: "contact" }
];

const pageKey = document.body.dataset.page;

const headerMount = document.querySelector("[data-site-header]");
const footerMount = document.querySelector("[data-site-footer]");

if (headerMount) {
  headerMount.innerHTML = `
    <header class="site-header">
      <div class="utility-bar">
        <div class="shell utility-inner">
          <div class="utility-pill">Bhiwadi | South Haryana</div>
          <div class="utility-links">
            <a href="contact.html">Book Appointment</a>
            <a href="${siteMeta.google}" target="_blank" rel="noopener noreferrer">Google Profile</a>
            <a href="contact.html">Contact</a>
          </div>
        </div>
      </div>

      <div class="nav-bar">
        <div class="shell nav-wrap">
          <a class="brand" href="index.html" aria-label="Medicine Square home">
            <img src="assets/img/logo.jpeg" alt="Medicine Square logo">
            <div class="brand-mark">
              <strong>${siteMeta.doctorName}</strong>
              <span>Consultant Internal Medicine</span>
            </div>
          </a>

          <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="primary-nav" aria-label="Toggle navigation">
            ☰
          </button>

          <nav class="nav-menu" id="primary-nav" aria-label="Primary navigation">
            ${navItems.map((item) => `
              <a href="${item.href}" class="${pageKey === item.key ? "is-active" : ""}">${item.label}</a>
            `).join("")}
            <a class="nav-cta" href="contact.html">Book Appointment</a>
          </nav>
        </div>
      </div>
    </header>
  `;
}

if (footerMount) {
  footerMount.innerHTML = `
    <footer class="site-footer">
      <div class="shell footer-panel">
        <div class="footer-branding">
          <div class="footer-brand">
            <img src="assets/img/logo.jpeg" alt="Medicine Square logo">
            <div>
              <h3>${siteMeta.clinicName}</h3>
              <p>${siteMeta.doctorName} provides patient-friendly internal medicine care for diabetes, BP, infections, fatigue, preventive health, and long-term disease management in Bhiwadi.</p>
            </div>
          </div>
          <div class="footer-badges">
            <span>Internal Medicine</span>
            <span>Preventive Health</span>
            <span>Emergency Perspective</span>
          </div>
        </div>

        <div class="footer-column">
          <h3>Explore</h3>
          <div class="footer-links">
            ${navItems.map((item) => `<a href="${item.href}">${item.label}</a>`).join("")}
          </div>
        </div>

        <div class="footer-column">
          <h3>Focus Areas</h3>
          <div class="footer-links">
            <a href="services.html">Diabetes and BP Care</a>
            <a href="services.html">Preventive Checkups</a>
            <a href="conditions.html">Fatty Liver and Obesity</a>
            <a href="conditions.html">Fever and Infections</a>
            <a href="services.html">ECG and Heart Risk Review</a>
          </div>
        </div>

        <div class="footer-column">
          <h3>Contact</h3>
          <p>Bhiwadi, Rajasthan<br>Serving Bhiwadi and South Haryana</p>
          <p><a href="mailto:${siteMeta.email}">${siteMeta.email}</a></p>
          <p>WhatsApp number to be added</p>
          <div class="social-grid">
            <a href="${siteMeta.instagram}" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="${siteMeta.youtube}" target="_blank" rel="noopener noreferrer">YouTube</a>
            <a href="${siteMeta.facebook}" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="${siteMeta.google}" target="_blank" rel="noopener noreferrer">Google</a>
          </div>
        </div>
      </div>
      <div class="shell footer-bottom">
        <p>Medical information on this website is for general awareness and does not replace direct consultation or emergency care.</p>
      </div>
    </footer>
  `;
}

const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");

if (navToggle && navMenu) {
  navToggle.addEventListener("click", () => {
    const expanded = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-expanded", String(!expanded));
    navMenu.classList.toggle("is-open");
  });

  navMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}
