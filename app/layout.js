import "./globals.css";
import "../assets/css/styles.css";
import { siteMeta } from "../lib/siteData";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";

export const metadata = {
  metadataBase: new URL("https://drkulwant.vercel.app"),
  title: "Dr. Kulwant Yadav | Consultant Internal Medicine in Bhiwadi",
  description:
    "Consult Dr. Kulwant Yadav in Bhiwadi for diabetes, BP, fatty liver, infections, preventive health, ECG, sleep issues, and long-term internal medicine care.",
  openGraph: {
    title: "Dr. Kulwant Yadav | Trusted Internal Medicine Care in Bhiwadi",
    description:
      "Patient-friendly internal medicine care for diabetes, hypertension, infections, metabolic health, and preventive wellness in Bhiwadi.",
    type: "website",
    images: ["/assets/img/doctor-formal-studio.jpg"],
  },
  icons: {
    icon: "/assets/img/logo.jpeg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased">
        <SiteHeader />
        {children}
        <SiteFooter />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Physician",
              name: siteMeta.doctorName,
              medicalSpecialty: "InternalMedicine",
              jobTitle: "Consultant Internal Medicine",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Bhiwadi",
                addressRegion: "Rajasthan",
                addressCountry: "IN",
              },
              email: siteMeta.email,
              sameAs: [
                siteMeta.instagram,
                siteMeta.google,
                siteMeta.youtube,
                siteMeta.facebook,
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
