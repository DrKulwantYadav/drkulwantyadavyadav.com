"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navItems, siteMeta } from "../lib/siteData";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="utility-bar">
        <div className="shell utility-inner">
          <div className="utility-pill">{siteMeta.region}</div>
          <div className="utility-links">
            <Link href="/contact">Book Appointment</Link>
            <a href={siteMeta.google} target="_blank" rel="noopener noreferrer">
              Google Profile
            </a>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
      </div>

      <div className="nav-bar">
        <div className="shell nav-wrap">
          <Link className="brand" href="/" aria-label="Medicine Square home">
            <div className="brand-mark">
              <strong>{siteMeta.doctorName}</strong>
              <span>{siteMeta.title}</span>
            </div>
          </Link>

          <button
            className="nav-toggle"
            type="button"
            aria-expanded={open}
            aria-controls="primary-nav"
            aria-label="Toggle navigation"
            onClick={() => setOpen((value) => !value)}
          >
            ☰
          </button>

          <nav
            className={`nav-menu${open ? " is-open" : ""}`}
            id="primary-nav"
            aria-label="Primary navigation"
          >
            {navItems.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={active ? "is-active" : ""}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              );
            })}
            <Link className="nav-cta" href="/contact" onClick={() => setOpen(false)}>
              Book Appointment
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
