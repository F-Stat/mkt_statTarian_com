export function Privacy() {
  return (
    <main className="pt-24 pb-24 bg-[var(--background)] text-neutral-100 min-h-screen">
      <div className="container mx-auto px-4 max-w-4xl">
        <article className="mx-auto space-y-6">
          <h1 style={{ fontFamily: 'var(--font-display)' }}>Privacy Policy</h1>
          <p className="text-neutral-400">Last updated: April 2026</p>

          <h2>1. Introduction</h2>
          <p>
            This Privacy Policy explains how statTarian Limited (“statTarian”, “we”, “us”, “our”)
            processes personal data in connection with the statTarian Platform — an intelligent
            analytics and academy‑management system used by football clubs and academies (“Clubs”).
          </p>

          <h2>2. Our Role as Data Processor</h2>
          <p>
            For all personal data uploaded to or generated within the Platform by a Club,
            <strong> statTarian acts as a Data Processor</strong>. The Club is the Data Controller and
            determines the purposes and lawful bases for processing personal data relating to players,
            parents, coaches, staff, and other individuals.
          </p>
          <p>
            statTarian processes this data solely on the documented instructions of the Club, in
            accordance with a Data Processing Agreement (“DPA”) executed before the Platform is
            activated.
          </p>
          <p>
            If your data is held on the Platform, please direct privacy requests to your Club as the
            Data Controller.
          </p>

          <h2>3. Who This Policy Applies To</h2>
          <ul>
            <li>Club administrators</li>
            <li>Coaches and technical staff</li>
            <li>Parents and guardians</li>
            <li>Players (typically 16+, or younger with parental consent)</li>
            <li>Scouts, medical and performance staff</li>
            <li>Safeguarding officers</li>
            <li>Prospective customers</li>
          </ul>

          <h2>4. Personal Data We Process</h2>
          <p>When acting as Data Processor, statTarian processes the following categories of data on behalf of Clubs:</p>
          <ul>
            <li>
              <strong>Identity data:</strong> Name, date of birth, photograph, gender
            </li>
            <li>
              <strong>Contact data:</strong> Address, phone number, email, parent/guardian details
            </li>
            <li>
              <strong>Performance & development data:</strong> Match events, training loads, development plans, attendance
            </li>
            <li>
              <strong>Medical & special category data:</strong> Injury records, medical notes, biological maturation data, wellbeing metrics, safeguarding case records, DBS/criminal records
            </li>
            <li>
              <strong>Media data:</strong> Video footage of matches and training sessions
            </li>
            <li>
              <strong>Technical data:</strong> Device information, IP address, login activity
            </li>
          </ul>

          <h2>5. Children’s Data</h2>
          <p>The Platform includes enhanced protections for minors:</p>
          <ul>
            <li>Row‑Level Security isolating each Club’s data</li>
            <li>Role‑based access controls</li>
            <li>Parents/guardians may access only their own child’s data</li>
            <li>No child’s data is used for marketing or profiling</li>
            <li>Children under 13 do not receive direct login access</li>
          </ul>

          <h2>6. Video Footage</h2>
          <p>
            Video footage is treated as sensitive personal data, particularly where minors are identifiable.
            Each Club’s footage is stored in a dedicated, isolated storage bucket and is not accessible to
            any other Club. Footage is permanently deleted within 30 days of a verified erasure request.
          </p>

          <h2>7. Legal Basis for Processing</h2>
          <p>
            <strong>When statTarian acts as Data Processor:</strong> The Club determines the lawful basis for processing.
          </p>
          <p>
            <strong>When statTarian acts as Data Controller</strong> (e.g., billing, account management, enquiries),
            processing is based on:
          </p>
          <ul>
            <li><strong>Contractual necessity</strong></li>
            <li><strong>Legitimate interests</strong></li>
            <li><strong>Legal obligation</strong></li>
          </ul>

          <h2>8. Data Retention</h2>
          <p><strong>As Data Processor:</strong></p>
          <ul>
            <li>Data retained for the duration of the subscription</li>
            <li>90‑day post‑cancellation grace period</li>
            <li>Permanent deletion after the grace period</li>
          </ul>
          <p><strong>As Data Controller:</strong></p>
          <ul>
            <li>Billing records: 7 years</li>
            <li>Enquiries and demo requests: up to 2 years</li>
          </ul>

          <h2>9. Sub‑Processors</h2>
          <ul>
            <li><strong>Supabase</strong> — database, authentication, storage (EU – Frankfurt)</li>
            <li><strong>Vercel</strong> — frontend hosting</li>
            <li><strong>Bunny.net</strong> — video storage and delivery (EEA)</li>
            <li><strong>Resend</strong> — transactional email delivery (EU)</li>
          </ul>

          <h2>10. Your Rights Under UK GDPR</h2>
          <ul>
            <li>Right of access</li>
            <li>Right to rectification</li>
            <li>Right to erasure</li>
            <li>Right to restriction</li>
            <li>Right to data portability</li>
            <li>Right to object</li>
            <li>Right to withdraw consent</li>
          </ul>
          <p>
            If your data is processed on behalf of a Club, please contact your Club. For statTarian‑controlled
            data, contact: <strong>privacy@stattarian.com</strong>.
          </p>

          <h2>11. Data Security</h2>
          <ul>
            <li>Encryption in transit (TLS 1.2+) and at rest (AES‑256)</li>
            <li>Row‑Level Security at database level</li>
            <li>Role‑based access controls</li>
            <li>Segregated safeguarding data</li>
            <li>Continuous monitoring and audit logging</li>
            <li>Breach notifications to the ICO within 72 hours where required</li>
          </ul>

          <h2>12. International Data Transfers</h2>
          <p>
            All personal data is stored and processed within the UK and EEA. Where transfers outside the EEA
            are required, Standard Contractual Clauses and additional safeguards are applied.
          </p>

          <h2>13. Complaints</h2>
          <p>
            You may contact us at <strong>privacy@stattarian.com</strong>. You also have the right to lodge a
            complaint with the Information Commissioner’s Office (ICO): ico.org.uk or 0303 123 1113.
          </p>

          <h2>14. Contact</h2>
          <p>
            statTarian Limited<br />
            Wales, United Kingdom<br />
            Data Protection Enquiries: <strong>privacy@stattarian.com</strong>
          </p>
        </article>
      </div>
    </main>
  )
}
