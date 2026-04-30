"use client";

import { AnimatedSection } from "../../components/marketing/AnimatedSection";
import { ShieldCheck, Lock, Globe, Users } from "lucide-react";
import { HeroSurface } from "../../components/marketing/layout/HeroSurface";

const pillClass =
  "inline-block px-3 py-1 md:px-4 md:py-1.5 rounded-full text-xs md:text-sm uppercase tracking-[0.2em] font-semibold text-white";

const now = new Date();
const currentMonthYear = now.toLocaleString("en-GB", {
  month: "long",
  year: "numeric",
});

export default function DataProcessing() {
  return (
    <main className="pt-16 md:pt-24 bg-background text-neutral-100 min-h-screen">
      {/* HERO */}
      <HeroSurface className="py-12 md:py-24">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto space-y-4 md:space-y-6">
              <span
                className={pillClass}
                style={{
                  fontFamily: "var(--font-heading)",
                  backgroundColor: "var(--color-brand-700)",
                }}
              >
                Data Protection
              </span>

              <h1
                className="text-4xl md:text-6xl lg:text-7xl font-bold"
                style={{ fontFamily: "var(--font-display)" }}
              >
                How We Process Data
              </h1>

              <p
                className="text-base md:text-xl text-muted-foreground"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Transparent, safeguarding‑first data handling for academies.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </HeroSurface>

      {/* LEGAL CONTENT */}
      <section className="py-12 md:py-12">
        <div className="container mx-auto px-4 max-w-6xl">
          <AnimatedSection>
            <h2
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Data Processing
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
              {/* LEFT COLUMN */}
              <div className="space-y-12">
                <p className="text-sm text-muted-foreground">
                  <strong>Last updated:</strong> {currentMonthYear}
                </p>

                {/* 1 */}
                <div className="space-y-4">
                  <span
                    className={pillClass}
                    style={{ backgroundColor: "var(--color-brand-700)" }}
                  >
                    1. Our Role
                  </span>
                  <p>
                    statTarian Limited acts as a <strong>Data Processor</strong>{" "}
                    for all personal data uploaded to or generated within the
                    Platform by Clubs. Clubs act as
                    <strong> Data Controllers</strong> and determine the lawful
                    basis for processing.
                  </p>
                </div>

                {/* 2 */}
                <div className="space-y-4">
                  <span
                    className={pillClass}
                    style={{ backgroundColor: "var(--color-brand-700)" }}
                  >
                    2. Types of Data Processed
                  </span>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Identity data (name, DOB, gender, photograph)</li>
                    <li>
                      Contact data (address, email, phone, guardian details)
                    </li>
                    <li>Performance data (training loads, match events)</li>
                    <li>Safeguarding and wellbeing data</li>
                    <li>Medical and injury records</li>
                    <li>Video and media data</li>
                    <li>Technical data (IP, device, login activity)</li>
                  </ul>
                </div>

                {/* 3 */}
                <div className="space-y-4">
                  <span
                    className={pillClass}
                    style={{ backgroundColor: "var(--color-brand-700)" }}
                  >
                    3. Children’s Data
                  </span>
                  <p>
                    The Platform includes enhanced protections for minors,
                    including:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Row‑Level Security (RLS)</li>
                    <li>Role‑based access controls (RBAC)</li>
                    <li>Parent‑only visibility of their own child</li>
                    <li>No marketing or profiling</li>
                    <li>No direct login for under‑13s</li>
                  </ul>
                </div>

                {/* 4 */}
                <div className="space-y-4">
                  <span
                    className={pillClass}
                    style={{ backgroundColor: "var(--color-brand-700)" }}
                  >
                    4. Video Footage
                  </span>
                  <p>
                    Video footage is treated as sensitive personal data. Clubs
                    control retention and deletion. statTarian deletes footage
                    within 30 days of a verified erasure request.
                  </p>
                </div>
              </div>

              {/* RIGHT COLUMN */}
              <div className="space-y-12 md:pt-[64px]">
                {/* 5 */}
                <div className="space-y-4">
                  <span
                    className={pillClass}
                    style={{ backgroundColor: "var(--color-brand-700)" }}
                  >
                    5. Sub‑Processors
                  </span>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Supabase — database, auth, storage</li>
                    <li>Vercel — hosting</li>
                    <li>Bunny.net — video delivery</li>
                    <li>Resend — transactional email</li>
                  </ul>
                </div>

                {/* 6 */}
                <div className="space-y-4">
                  <span
                    className={pillClass}
                    style={{ backgroundColor: "var(--color-brand-700)" }}
                  >
                    6. Data Security
                  </span>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Encryption in transit and at rest</li>
                    <li>Row‑Level Security</li>
                    <li>Role‑based access controls</li>
                    <li>Segregated safeguarding data</li>
                    <li>Audit logging and monitoring</li>
                    <li>Breach notifications within 72 hours</li>
                  </ul>
                </div>

                {/* 7 */}
                <div className="space-y-4">
                  <span
                    className={pillClass}
                    style={{ backgroundColor: "var(--color-brand-700)" }}
                  >
                    7. International Transfers
                  </span>
                  <p>
                    All personal data is stored in the UK/EEA. Transfers outside
                    the EEA use Standard Contractual Clauses (SCCs) and
                    additional safeguards.
                  </p>
                </div>

                {/* 8 */}
                <div className="space-y-4">
                  <span
                    className={pillClass}
                    style={{ backgroundColor: "var(--color-brand-700)" }}
                  >
                    8. Contact
                  </span>
                  <p>
                    For data protection enquiries:
                    <br />
                    <strong>privacy@stattarian.com</strong>
                    <br />
                    Wales, United Kingdom
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}
