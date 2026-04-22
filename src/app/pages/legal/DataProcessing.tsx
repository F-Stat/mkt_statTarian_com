export function DataProcessing() {
  return (
    <main className="pt-24 pb-24 bg-[var(--background)] text-neutral-100 min-h-screen">
      <div className="container mx-auto px-4 max-w-4xl">
        <article className="mx-auto space-y-6">
          <h1 style={{ fontFamily: 'var(--font-display)' }}>Data Processing</h1>
          <p className="text-neutral-400">Last updated: April 2026</p>

          <h2>1. Overview</h2>
          <p>
            statTarian Limited (“statTarian”, “we”, “us”, “our”) acts as a Data Processor
            for football clubs and academies (“Clubs”) that use the statTarian Platform.
            This page summarises how we process personal data on behalf of Clubs in
            accordance with UK GDPR and our Data Processing Agreement (“DPA”).
          </p>

          <h2>2. Roles and Responsibilities</h2>
          <p>
            When a Club subscribes to the Platform, the Club becomes the Data Controller.
            statTarian acts as the Data Processor and processes personal data only on the
            documented instructions of the Club.
          </p>
          <p>Clubs are responsible for:</p>
          <ul>
            <li>Determining the lawful basis for processing</li>
            <li>Managing user access and permissions</li>
            <li>Ensuring data accuracy and compliance with safeguarding policies</li>
            <li>Responding to data subject rights requests</li>
          </ul>

          <h2>3. Categories of Data Processed</h2>
          <p>statTarian processes the following categories of data on behalf of Clubs:</p>
          <ul>
            <li><strong>Identity data:</strong> Name, date of birth, photograph</li>
            <li><strong>Contact data:</strong> Address, phone number, email</li>
            <li><strong>Player development data:</strong> Training loads, match events, plans</li>
            <li><strong>Medical & special category data:</strong> Injuries, wellbeing, maturation</li>
            <li><strong>Safeguarding data:</strong> Case notes, restricted‑access records</li>
            <li><strong>Media data:</strong> Video footage of matches and training</li>
            <li><strong>Technical data:</strong> Device information, IP address, login activity</li>
          </ul>

          <h2>4. Children’s Data</h2>
          <p>
            The Platform is designed for youth football environments and includes enhanced
            protections for minors:
          </p>
          <ul>
            <li>Row‑Level Security isolating each Club’s data</li>
            <li>Role‑based access controls set by the Club</li>
            <li>Parents/guardians may access only their own child’s data</li>
            <li>No child’s data is used for marketing or profiling</li>
            <li>Children under 13 do not receive direct login access</li>
          </ul>

          <h2>5. Video Processing</h2>
          <p>
            Video footage is treated as sensitive personal data. Each Club’s footage is
            stored in a dedicated, isolated storage bucket and is not accessible to any
            other Club. Footage is permanently deleted within 30 days of a verified
            erasure request.
          </p>

          <h2>6. Sub‑Processors</h2>
          <p>
            statTarian uses carefully selected Sub‑Processors to support the Platform.
            All Sub‑Processors are bound by written agreements ensuring GDPR‑compliant
            processing.
          </p>
          <ul>
            <li><strong>Supabase</strong> — database, authentication, storage (EU – Frankfurt)</li>
            <li><strong>Vercel</strong> — frontend hosting and deployment</li>
            <li><strong>Bunny.net</strong> — video storage and delivery (EEA)</li>
            <li><strong>Resend</strong> — transactional email delivery (EU)</li>
          </ul>

          <h2>7. Security Measures</h2>
          <p>We implement robust technical and organisational measures, including:</p>
          <ul>
            <li>Encryption in transit (TLS 1.2+) and at rest (AES‑256)</li>
            <li>Row‑Level Security at database level</li>
            <li>Role‑based access controls</li>
            <li>Segregated safeguarding data</li>
            <li>Continuous monitoring and audit logging</li>
            <li>Breach notifications to the ICO within 72 hours where required</li>
          </ul>

          <h2>8. Data Retention</h2>
          <p><strong>As Data Processor:</strong></p>
          <ul>
            <li>Data retained for the duration of the Club’s subscription</li>
            <li>90‑day post‑cancellation grace period</li>
            <li>Permanent deletion after the grace period</li>
          </ul>

          <h2>9. International Transfers</h2>
          <p>
            All personal data is stored and processed within the UK and EEA. Where
            transfers outside the EEA are required, Standard Contractual Clauses and
            additional safeguards are applied.
          </p>

          <h2>10. Data Subject Rights</h2>
          <p>
            statTarian supports Clubs in fulfilling their obligations under UK GDPR.
            Data subject requests (access, erasure, rectification, etc.) must be directed
            to the relevant Club as the Data Controller.
          </p>

          <h2>11. Contact</h2>
          <p>
            For data protection enquiries, please contact:<br />
            <strong>privacy@stattarian.com</strong>
          </p>
          <p>
            statTarian Limited<br />
            Wales, United Kingdom
          </p>
        </article>
      </div>
    </main>
  )
}
