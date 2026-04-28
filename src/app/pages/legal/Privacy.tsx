"use client";

import { AnimatedSection } from "../../components/marketing/AnimatedSection";
import { ShieldCheck, Lock, Users, FileText } from "lucide-react";

const pillClass =
  "inline-block px-3 py-1 md:px-4 md:py-1.5 rounded-full text-xs md:text-sm uppercase tracking-[0.2em] font-semibold text-white";

export function Privacy() {
  return (
    <main className="pt-16 md:pt-24 bg-background text-neutral-100 min-h-screen">
      {/* HERO */}
      <section className="py-12 md:py-24">
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
                Privacy Policy
              </span>

              <h1
                className="text-4xl md:text-6xl lg:text-7xl font-bold"
                style={{ fontFamily: "var(--font-display)" }}
              >
                How We Protect Your Data
              </h1>

              <p
                className="text-base md:text-xl text-muted-foreground"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Transparent, safeguarding‑first privacy for Clubs, parents, and
                players.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* SUMMARY CARDS */}
      <section className="py-12 md:py-24 bg-card border-y border-border">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              <div className="bg-background border border-border rounded-xl p-6 space-y-3">
                <ShieldCheck className="h-8 w-8 text-primary" />
                <h3 className="font-bold text-lg">Data Processor</h3>
                <p className="text-muted-foreground text-sm">
                  Clubs control their data. statTarian processes it on their
                  behalf.
                </p>
              </div>

              <div className="bg-background border border-border rounded-xl p-6 space-y-3">
                <Lock className="h-8 w-8 text-primary" />
                <h3 className="font-bold text-lg">Youth‑Safe</h3>
                <p className="text-muted-foreground text-sm">
                  Enhanced protections for minors, including RLS + RBAC.
                </p>
              </div>

              <div className="bg-background border border-border rounded-xl p-6 space-y-3">
                <Users className="h-8 w-8 text-primary" />
                <h3 className="font-bold text-lg">Parent Visibility</h3>
                <p className="text-muted-foreground text-sm">
                  Parents access only their own child’s data.
                </p>
              </div>

              <div className="bg-background border border-border rounded-xl p-6 space-y-3">
                <FileText className="h-8 w-8 text-primary" />
                <h3 className="font-bold text-lg">No Marketing Use</h3>
                <p className="text-muted-foreground text-sm">
                  Children’s data is never used for profiling or marketing.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* LEGAL CONTENT */}
      <section className="py-12 md:py-24">
        <div className="container mx-auto px-4 max-w-6xl">
          <AnimatedSection>
            <h2
              className="text-3xl md:text-4xl font-bold mb-12"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Privacy Policy
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
              {/* LEFT COLUMN */}
              <div className="space-y-12">
                <p className="text-sm text-muted-foreground">
                  <strong>Last updated:</strong> April 2026
                </p>

                {/* 1 */}
                <div className="space-y-4">
                  <span
                    className={pillClass}
                    style={{ backgroundColor: "var(--color-brand-700)" }}
                  >
                    1. Introduction
                  </span>
                  <p>
                    This Privacy Policy explains how statTarian Limited
                    (“statTarian”, “we”, “us”, “our”) processes personal data in
                    connection with the statTarian Platform — an intelligent
                    analytics and academy‑management system used by football
                    clubs and academies (“Clubs”).
                  </p>
                </div>

                {/* 2 */}
                <div className="space-y-4">
                  <span
                    className={pillClass}
                    style={{ backgroundColor: "var(--color-brand-700)" }}
                  >
                    2. Our Role as Data Processor
                  </span>
                  <p>
                    For all personal data uploaded to or generated within the
                    Platform by a Club,
                    <strong> statTarian acts as a Data Processor</strong>. The
                    Club is the Data Controller.
                  </p>
                  <p>
                    statTarian processes this data solely on the documented
                    instructions of the Club.
                  </p>
                  <p>
                    If your data is held on the Platform, please direct privacy
                    requests to your Club.
                  </p>
                </div>

                {/* 3 */}
                <div className="space-y-4">
                  <span
                    className={pillClass}
                    style={{ backgroundColor: "var(--color-brand-700)" }}
                  >
                    3. Who This Policy Applies To
                  </span>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Club administrators</li>
                    <li>Coaches and technical staff</li>
                    <li>Parents and guardians</li>
                    <li>Players</li>
                    <li>Scouts and medical staff</li>
                    <li>Safeguarding officers</li>
                    <li>Prospective customers</li>
                  </ul>
                </div>

                {/* 4 */}
                <div className="space-y-4">
                  <span
                    className={pillClass}
                    style={{ backgroundColor: "var(--color-brand-700)" }}
                  >
                    4. Personal Data We Process
                  </span>
                  <p>When acting as Data Processor, statTarian processes:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>Identity data:</strong> Name, DOB, photograph,
                      gender
                    </li>
                    <li>
                      <strong>Contact data:</strong> Address, phone, email,
                      guardian details
                    </li>
                    <li>
                      <strong>Performance data:</strong> Match events, training
                      loads
                    </li>
                    <li>
                      <strong>Medical data:</strong> Injuries, wellbeing,
                      safeguarding records
                    </li>
                    <li>
                      <strong>Media data:</strong> Video footage
                    </li>
                    <li>
                      <strong>Technical data:</strong> Device info, IP, login
                      activity
                    </li>
                  </ul>
                </div>

                {/* 5 */}
                <div className="space-y-4">
                  <span
                    className={pillClass}
                    style={{ backgroundColor: "var(--color-brand-700)" }}
                  >
                    5. Children’s Data
                  </span>
                  <p>The Platform includes enhanced protections for minors:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Row‑Level Security</li>
                    <li>Role‑based access controls</li>
                    <li>Parents access only their own child’s data</li>
                    <li>No marketing or profiling</li>
                    <li>No direct login for under‑13s</li>
                  </ul>
                </div>

                {/* 6 */}
                <div className="space-y-4">
                  <span
                    className={pillClass}
                    style={{ backgroundColor: "var(--color-brand-700)" }}
                  >
                    6. Video Footage
                  </span>
                  <p>
                    Video footage is treated as sensitive personal data. Each
                    Club’s footage is isolated and deleted within 30 days of a
                    verified erasure request.
                  </p>
                </div>

                {/* 7 */}
                <div className="space-y-4">
                  <span
                    className={pillClass}
                    style={{ backgroundColor: "var(--color-brand-700)" }}
                  >
                    7. Legal Basis for Processing
                  </span>
                  <p>
                    <strong>As Data Processor:</strong> lawful basis is
                    determined by the Club.
                  </p>
                  <p>
                    <strong>As Data Controller:</strong>
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Contractual necessity</li>
                    <li>Legitimate interests</li>
                    <li>Legal obligation</li>
                  </ul>
                </div>
              </div>

              {/* RIGHT COLUMN */}
              <div className="space-y-12 md:pt-[72px]">
                {/* 8 */}
                <div className="space-y-4">
                  <span
                    className={pillClass}
                    style={{ backgroundColor: "var(--color-brand-700)" }}
                  >
                    8. Data Retention
                  </span>
                  <p>
                    <strong>As Data Processor:</strong>
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Retained for subscription duration</li>
                    <li>90‑day grace period</li>
                    <li>Permanent deletion after grace period</li>
                  </ul>
                  <p>
                    <strong>As Data Controller:</strong>
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Billing records: 7 years</li>
                    <li>Enquiries: up to 2 years</li>
                  </ul>
                </div>

                {/* 9 */}
                <div className="space-y-4">
                  <span
                    className={pillClass}
                    style={{ backgroundColor: "var(--color-brand-700)" }}
                  >
                    9. Sub‑Processors
                  </span>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Supabase — database, auth, storage</li>
                    <li>Vercel — frontend hosting</li>
                    <li>Bunny.net — video delivery</li>
                    <li>Resend — transactional email</li>
                  </ul>
                </div>

                {/* 10 */}
                <div className="space-y-4">
                  <span
                    className={pillClass}
                    style={{ backgroundColor: "var(--color-brand-700)" }}
                  >
                    10. Your Rights
                  </span>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Access</li>
                    <li>Rectification</li>
                    <li>Erasure</li>
                    <li>Restriction</li>
                    <li>Portability</li>
                    <li>Object</li>
                    <li>Withdraw consent</li>
                  </ul>
                  <p>
                    Contact your Club or <strong>privacy@stattarian.com</strong>
                    .
                  </p>
                </div>

                {/* 11 */}
                <div className="space-y-4">
                  <span
                    className={pillClass}
                    style={{ backgroundColor: "var(--color-brand-700)" }}
                  >
                    11. Data Security
                  </span>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Encryption in transit and at rest</li>
                    <li>Row‑Level Security</li>
                    <li>Role‑based access controls</li>
                    <li>Segregated safeguarding data</li>
                    <li>Monitoring and audit logging</li>
                    <li>Breach notifications within 72 hours</li>
                  </ul>
                </div>

                {/* 12 */}
                <div className="space-y-4">
                  <span
                    className={pillClass}
                    style={{ backgroundColor: "var(--color-brand-700)" }}
                  >
                    12. International Transfers
                  </span>
                  <p>
                    All personal data is stored in the UK/EEA. Transfers outside
                    the EEA use SCCs and additional safeguards.
                  </p>
                </div>

                {/* 13 */}
                <div className="space-y-4">
                  <span
                    className={pillClass}
                    style={{ backgroundColor: "var(--color-brand-700)" }}
                  >
                    13. Complaints
                  </span>
                  <p>
                    Contact <strong>privacy@stattarian.com</strong> or the ICO
                    (ico.org.uk).
                  </p>
                </div>

                {/* 14 */}
                <div className="space-y-4">
                  <span
                    className={pillClass}
                    style={{ backgroundColor: "var(--color-brand-700)" }}
                  >
                    14. Contact
                  </span>
                  <p>
                    statTarian Limited
                    <br />
                    Cymru, United Kingdom
                    <br />
                    <strong>privacy@stattarian.com</strong>
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
