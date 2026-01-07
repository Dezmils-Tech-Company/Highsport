import { motion } from "framer-motion";

const PrivacyPolicy = () => {
  return (
    <section className="py-24 px-4 bg-gray-900 text-gray-300">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h1 className="text-4xl font-bold mb-4 font-serif">
            <span className="text-yellow-400">Privacy</span> Policy
          </h1>
          <div className="w-24 h-1 bg-yellow-500 mx-auto"></div>
          <p className="mt-4">Last updated: {new Date().toLocaleDateString()}</p>
          <p className="mt-4 text-sm text-gray-400">
            This Privacy Policy applies to the public website and registration
            services for the Regional High School Games & Sports Management
            system ("we", "us", "our"). It explains what personal data we
            collect, why we collect it, how we use it, and the choices available
            to participants, parents/guardians, and schools.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="prose prose-invert max-w-none"
        >
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-yellow-400">
              1. Who we are
            </h2>
            <p>
              We operate the Regional High School Games & Sports Management
              platform that supports event registration, scheduling, results
              publishing, accreditation, and communication for regional high
              school sporting events. The platform is provided by Dezmils-Tech-Company
              on behalf of regional organisers.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-yellow-400">
              2. Information we collect
            </h2>
            <p>We collect information necessary to register and manage participants:</p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>
                <strong>Registrant & Participant Information:</strong> names,
                school, team, age/grade, gender (if provided), contact email and
                phone number, emergency contact, and guardian details for minors.
              </li>
              <li>
                <strong>Health & Safety Information:</strong> medical notes,
                allergy or emergency treatment instructions provided by a
                participant/guardian to ensure safety at events.
              </li>
              <li>
                <strong>Event Records:</strong> registration history, event
                entries, competition results, rankings and awards.
              </li>
              <li>
                <strong>Media:</strong> photos, video and live results captured
                at events. We publish some media or results for results boards,
                partner sites and social media with appropriate permissions.
              </li>
              <li>
                <strong>Payments:</strong> payment information and receipts when
                fees are processed (we do not store full card details; payment
                processors handle card data).
              </li>
              <li>
                <strong>Usage & Technical Data:</strong> IP address, device,
                browser, cookies and analytics data to operate and improve the
                website and systems.
              </li>
            </ul>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-yellow-400">
              3. Why we collect and how we use your data
            </h2>
            <p>We use data to:</p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>Register participants and manage event entries and schedules.</li>
              <li>Ensure participant safety and manage medical or emergency needs.</li>
              <li>Process payments for entry fees, merchandise or services.</li>
              <li>Publish results, rankings and certificates to participants and the public.</li>
              <li>Manage accreditation, venue access and official reporting.</li>
              <li>Communicate event updates, schedules and emergency notices to participants and guardians.</li>
              <li>Analyse and improve the service via anonymised analytics.</li>
              <li>Comply with legal obligations and respond to lawful requests.</li>
            </ul>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-yellow-400">
              4. Minors and parental consent
            </h2>
            <p>
              Many participants are minors (under 18). We require a parent or
              legal guardian to provide consent during registration for any
              personal, medical or media information submitted about the minor.
              Guardians can request removal of photos or videos of their child
              from our public channels (see Contact Us). We take extra care to
              protect and restrict access to minors' data.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-yellow-400">
              5. Media, photographs & publicity
            </h2>
            <p>
              Event media (photos, video, livestreams) may be recorded during
              competitions and used for event promotion, partner sites and
              results pages. We will request permission where required by
              organisers or local policy. You may request removal of specific
              images or videos by contacting us.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-yellow-400">
              6. Third parties and service providers
            </h2>
            <p>We share data only as needed with:</p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>Payment processors (to charge fees)</li>
              <li>Timing and results providers, live scoring partners</li>
              <li>Event hosts, schools and authorised officials</li>
              <li>Cloud hosting, analytics and email/SMS providers</li>
              <li>Media partners when publishing photographs or video (with consent where required)</li>
              <li>Legal or regulatory authorities when required by law</li>
            </ul>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-yellow-400">
              7. Data retention and deletion
            </h2>
            <p>
              We retain personal data for as long as necessary to fulfil the
              purposes above, or as required by law. Event records and results
              may be kept for historical, reporting and statutory reasons (for
              example up to several years). You may request correction or
              deletion of your personal data (subject to legal obligations and
              event records that must be retained).
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-yellow-400">8. Data security</h2>
            <p>
              We implement reasonable technical and organisational measures to
              protect data, including access controls, encryption in transit,
              and secure hosting. While we aim to protect personal information,
              no system is completely secure — please contact us promptly if
              you suspect a data issue.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-yellow-400">
              9. Your rights
            </h2>
            <p>You have the right to:</p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>Access the personal information we hold about you or your child.</li>
              <li>Request correction of inaccurate data.</li>
              <li>Request deletion or restriction of processing (subject to legal/operational limits).</li>
              <li>Withdraw consent where processing is based on consent.</li>
              <li>Object to direct marketing communications.</li>
              <li>Lodge a complaint with your local data protection authority.</li>
            </ul>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-yellow-400">
              10. International transfers
            </h2>
            <p>
              Data may be stored or processed in cloud services located in other
              countries. We take steps to ensure appropriate safeguards are in
              place (for example standard contractual clauses) where required.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-yellow-400">
              11. Changes to this policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. If changes
              are material, we will post a prominent notice on the website or
              notify registered contacts.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4 text-yellow-400">12. Contact us</h2>
            <p>
              For questions, data requests or to report concerns, contact:
              <br />
              <span className="text-yellow-400">privacy@dezmilstech-company.com</span>
              <br />
              Please include the participant name, school and event (where
              relevant) when making requests so we can locate records quickly.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;