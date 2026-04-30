"use client";

import { AnimatedSection } from "../../components/marketing/AnimatedSection";
import { HeroSurface } from "../../components/marketing/layout/HeroSurface";

const pillClass =
  "inline-block px-3 py-1 md:px-4 md:py-1.5 rounded-full text-xs md:text-sm uppercase tracking-[0.2em] font-semibold text-white";

const now = new Date();
const currentMonthYear = now.toLocaleString("en-GB", {
  month: "long",
  year: "numeric",
});

export function Terms() {
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
                Legal Document
              </span>

              <h1
                className="text-4xl md:text-6xl lg:text-7xl font-bold"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Your agreement with statTarian Limited
              </h1>

              <p
                className="text-base md:text-xl text-muted-foreground"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                The rules, responsibilities, and commitments governing your use
                of statTarian.
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
              Terms of Service
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
                    1. Acceptance of Terms
                  </span>
                  <p>
                    By accessing or using the statTarian website, platform, or
                    related services (“Services”), you agree to be bound by
                    these Terms of Service (“Terms”). If you do not agree to
                    these Terms, you must not use the Services.
                  </p>
                </div>

                {/* 2 */}
                <div className="space-y-4">
                  <span
                    className={pillClass}
                    style={{ backgroundColor: "var(--color-brand-700)" }}
                  >
                    2. About statTarian
                  </span>
                  <p>
                    statTarian Limited (“statTarian”, “we”, “us”, “our”)
                    provides a multi‑tenant SaaS platform designed for football
                    clubs and academies to manage player development,
                    performance data, safeguarding workflows, video analysis,
                    and operational processes.
                  </p>
                </div>

                {/* 3 */}
                <div className="space-y-4">
                  <span
                    className={pillClass}
                    style={{ backgroundColor: "var(--color-brand-700)" }}
                  >
                    3. Role of Clubs and Users
                  </span>
                  <p>
                    When a Club subscribes to the Platform, it becomes
                    responsible for managing access to its environment,
                    including creating user accounts for coaches, staff,
                    parents, and players. Clubs are solely responsible for
                    ensuring that:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Users are authorised to access the Platform</li>
                    <li>
                      Data entered into the Platform is accurate and lawful
                    </li>
                    <li>
                      Safeguarding and access‑control decisions comply with Club
                      policies
                    </li>
                  </ul>
                </div>

                {/* 4 */}
                <div className="space-y-4">
                  <span
                    className={pillClass}
                    style={{ backgroundColor: "var(--color-brand-700)" }}
                  >
                    4. Permitted Use
                  </span>
                  <p>
                    You agree to use the Services only for lawful purposes. You
                    must not:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Violate any applicable laws or regulations</li>
                    <li>Upload unlawful, harmful, or defamatory content</li>
                    <li>
                      Attempt to gain unauthorised access to any system or
                      account
                    </li>
                    <li>
                      Interfere with or disrupt the integrity of the Platform
                    </li>
                    <li>
                      Reverse engineer, decompile, or copy any part of the
                      Platform
                    </li>
                    <li>Use the Platform to harass, abuse, or harm others</li>
                  </ul>
                </div>

                {/* 5 */}
                <div className="space-y-4">
                  <span
                    className={pillClass}
                    style={{ backgroundColor: "var(--color-brand-700)" }}
                  >
                    5. Intellectual Property
                  </span>
                  <p>
                    All content, software, design, branding, and functionality
                    within the statTarian Platform are the exclusive property of
                    statTarian Limited and are protected by copyright,
                    trademark, and other intellectual property laws.
                  </p>
                  <p>
                    No rights or licences are granted except those expressly
                    provided in these Terms or in a written agreement with
                    statTarian.
                  </p>
                </div>

                {/* 6 */}
                <div className="space-y-4">
                  <span
                    className={pillClass}
                    style={{ backgroundColor: "var(--color-brand-700)" }}
                  >
                    6. User Accounts
                  </span>
                  <p>
                    To access certain features, you may be required to create an
                    account. You are responsible for:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      Maintaining the confidentiality of your login credentials
                    </li>
                    <li>Ensuring your account is used only by you</li>
                    <li>
                      Notifying your Club or statTarian of any unauthorised
                      access
                    </li>
                  </ul>
                </div>

                {/* 7 */}
                <div className="space-y-4">
                  <span
                    className={pillClass}
                    style={{ backgroundColor: "var(--color-brand-700)" }}
                  >
                    7. Data Protection and Privacy
                  </span>
                  <p>
                    Your use of the Platform is governed by our Privacy Policy.
                    For Club data processed within the Platform, statTarian acts
                    as a Data Processor and the Club acts as the Data
                    Controller. statTarian processes data only on the Club’s
                    documented instructions.
                  </p>
                </div>

                {/* 8 */}
                <div className="space-y-4">
                  <span
                    className={pillClass}
                    style={{ backgroundColor: "var(--color-brand-700)" }}
                  >
                    8. Subscription, Licensing, and Payment
                  </span>
                  <p>
                    Access to the full Platform requires a paid subscription.
                    Subscription terms, pricing, billing cycles, and
                    cancellation policies are provided separately in your
                    subscription agreement or order form.
                  </p>
                  <p>
                    statTarian may suspend access for non‑payment or breach of
                    these Terms.
                  </p>
                </div>
              </div>

              {/* RIGHT COLUMN */}
              <div className="space-y-12 md:pt-[66px]">
                {/* 9 */}
                <div className="space-y-4">
                  <span
                    className={pillClass}
                    style={{ backgroundColor: "var(--color-brand-700)" }}
                  >
                    9. Service Availability and Updates
                  </span>
                  <p>
                    We aim to provide reliable and continuous service but do not
                    guarantee uninterrupted availability. We may modify, update,
                    or discontinue parts of the Platform at any time to improve
                    functionality, security, or performance.
                  </p>
                </div>

                {/* 10 */}
                <div className="space-y-4">
                  <span
                    className={pillClass}
                    style={{ backgroundColor: "var(--color-brand-700)" }}
                  >
                    10. Warranties and Disclaimers
                  </span>
                  <p>
                    The Platform is provided on an “as is” and “as available”
                    basis. To the fullest extent permitted by law, statTarian
                    disclaims all warranties, whether express or implied,
                    including fitness for a particular purpose, merchantability,
                    and non‑infringement.
                  </p>
                </div>

                {/* 11 */}
                <div className="space-y-4">
                  <span
                    className={pillClass}
                    style={{ backgroundColor: "var(--color-brand-700)" }}
                  >
                    11. Limitation of Liability
                  </span>
                  <p>
                    To the maximum extent permitted by law, statTarian Limited
                    shall not be liable for any indirect, incidental, special,
                    consequential, exemplary, or punitive damages, including
                    loss of profits, data, or goodwill.
                  </p>
                  <p>
                    statTarian’s total aggregate liability arising out of or
                    relating to the Services shall not exceed the amount paid by
                    the subscribing Club in the twelve (12) months preceding the
                    claim.
                  </p>
                </div>

                {/* 12 */}
                <div className="space-y-4">
                  <span
                    className={pillClass}
                    style={{ backgroundColor: "var(--color-brand-700)" }}
                  >
                    12. Indemnification
                  </span>
                  <p>
                    You agree to indemnify statTarian for claims arising from:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Your breach of these Terms</li>
                    <li>Your misuse of the Platform</li>
                    <li>Your violation of laws or third‑party rights</li>
                  </ul>
                </div>

                {/* 13 */}
                <div className="space-y-4">
                  <span
                    className={pillClass}
                    style={{ backgroundColor: "var(--color-brand-700)" }}
                  >
                    13. Termination
                  </span>
                  <p>
                    We may suspend or terminate access to the Platform at any
                    time if you or your Club breach these Terms, fail to pay
                    subscription fees, or engage in unlawful or harmful
                    activity.
                  </p>
                </div>

                {/* 14 */}
                <div className="space-y-4">
                  <span
                    className={pillClass}
                    style={{ backgroundColor: "var(--color-brand-700)" }}
                  >
                    14. Governing Law
                  </span>
                  <p>
                    These Terms are governed by the laws of England and Wales.
                    Any disputes shall be resolved exclusively in the courts of
                    England and Wales.
                  </p>
                </div>

                {/* 15 */}
                <div className="space-y-4">
                  <span
                    className={pillClass}
                    style={{ backgroundColor: "var(--color-brand-700)" }}
                  >
                    15. Changes to These Terms
                  </span>
                  <p>
                    We may update these Terms from time to time. Changes will be
                    posted on this page with an updated “Last updated” date.
                    Continued use of the Platform constitutes acceptance of the
                    revised Terms.
                  </p>
                </div>

                {/* 16 */}
                <div className="space-y-4">
                  <span
                    className={pillClass}
                    style={{ backgroundColor: "var(--color-brand-700)" }}
                  >
                    16. Contact Information
                  </span>
                  <p>For questions about these Terms:</p>
                  <p>
                    Email: <strong>legal@stattarian.com</strong>
                    <br />
                    Address: Wales, United Kingdom
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
