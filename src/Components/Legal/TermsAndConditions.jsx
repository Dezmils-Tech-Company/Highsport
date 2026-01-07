import { motion } from "framer-motion";

const TermsAndConditions = () => {
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
            <span className="text-yellow-400">Terms</span> & Conditions
          </h1>
          <div className="w-24 h-1 bg-yellow-500 mx-auto"></div>
          <p className="mt-4">Last updated: {new Date().toLocaleDateString()}</p>
          <p className="mt-4 text-sm text-gray-400">
            These Terms & Conditions govern use of the Regional High School Games & Sports Management
            system (the "Platform") provided by Dezmils-Tech-Company to support regional high school
            competitions — including registration, scheduling, results, accreditation and communications.
            By registering, submitting information, or otherwise using the Platform you agree to these
            terms. If you register a minor, you confirm that you are the participant's parent or legal
            guardian and accept these terms on their behalf.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="prose prose-invert max-w-none"
        >
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-yellow-400">1. Purpose</h2>
            <p>
              The Platform is used to register participants, manage event entries, publish schedules and results,
              coordinate accreditation and communicate official event information. Services are provided to schools,
              teams, participants, officials and event organisers.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-yellow-400">2. Eligibility & Registration</h2>
            <p>
              Participants must meet eligibility criteria set by event organisers (age, school enrollment, gender category,
              residency, etc.). You must provide accurate, complete and up-to-date information when registering. Providing
              false or misleading information may result in disqualification or removal from events.
            </p>
            <p className="mt-2">
              When registering a minor, a parent or legal guardian must provide consent for collection and use of the minor's
              information and confirm eligibility.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-yellow-400">3. Fees, Payments & Refunds</h2>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>
                Entry fees, accreditation fees or other charges listed during registration must be paid as instructed. We use third-party
                payment processors — card details are not stored by the Platform.
              </li>
              <li>
                Refund and cancellation policies are set by the specific event organiser and will be presented during registration.
                Unless otherwise stated, refunds are subject to organiser policies and any payment processor fees.
              </li>
              <li>
                Disputed charges should first be raised with the event organiser; payment processor chargeback rights also apply.
              </li>
            </ul>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-yellow-400">4. Health, Safety & Medical Information</h2>
            <p>
              Participants (or their guardians) should disclose relevant medical or emergency information during registration to help
              organisers manage safety. Submission of medical details constitutes consent for authorised event medical staff to view
              and act on that information in an emergency.
            </p>
            <p className="mt-2">
              Participation is at the individual's own risk. Participants are responsible for obtaining appropriate medical advice and
              insurance. Organisers and Dezmils-Tech-Company are not liable for personal injury except to the extent required by law.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-yellow-400">5. Code of Conduct</h2>
            <p>
              All participants, guardians, coaches, officials and spectators must behave respectfully. Prohibited conduct includes:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>Harassment, discrimination or abusive behaviour;</li>
              <li>Use or distribution of banned or performance-enhancing substances;</li>
              <li>Physical violence or threats;</li>
              <li>Deliberate falsification of eligibility or results;</li>
              <li>Unauthorized commercial activities or photography where restricted.</li>
            </ul>
            <p className="mt-2">
              Organisers may remove or suspend individuals who breach the code of conduct.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-yellow-400">6. Results, Rankings & Publication</h2>
            <p>
              Results, rankings and performance data may be published on the Platform, partner sites and social channels. Results
              published by event timing/scoring partners are considered official once confirmed by organisers. Corrections to published
              results may be issued according to organiser appeals procedures.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-yellow-400">7. Media, Images & Privacy</h2>
            <p>
              Event photography, video and livestreaming may occur. Organisers will request permissions where required. Media that
              includes participants may be used for event promotion, partner pages and social media. Guardians may request removal of
              images of minors by contacting the organiser or Platform support; removal requests will be processed reasonably and promptly.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-yellow-400">8. Intellectual Property & Content</h2>
            <p>
              All Platform content, logos, code, schedule displays and branding are owned by Dezmils-Tech-Company or event organisers.
              Users may not reproduce or commercialise Platform content without prior written permission. Participants retain ownership
              of their personal submissions (subject to licences granted for event operation and publicity).
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-yellow-400">9. Liability & Waiver</h2>
            <p>
              To the maximum extent permitted by law, Dezmils-Tech-Company and event organisers are not liable for loss, injury or
              damage arising from participation except where caused by proven negligence. By registering you agree to comply with safety
              instructions and accept responsibility for personal belongings. For events involving travel, accommodation or third-party
              services, separate terms may apply.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-yellow-400">10. Event Cancellation & Force Majeure</h2>
            <p>
              Event organisers may cancel, postpone or change events due to weather, safety concerns, low entry numbers, public health
              matters or other unforeseeable circumstances. Refunds or transfers are subject to organiser policy. Neither Dezmils-Tech-Company
              nor organisers will be liable for cancellations caused by events outside their reasonable control.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-yellow-400">11. Data & Privacy</h2>
            <p>
              Personal data submitted through the Platform is handled in accordance with our Privacy Policy. Data is used to operate
              competitions, communicate with participants and meet legal or safety obligations. By registering you consent to the use
              of personal data as described in the Privacy Policy.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-yellow-400">12. Amendments to Terms</h2>
            <p>
              We may update these Terms & Conditions from time to time. Material changes will be communicated via the Platform or to
              registered contacts. Continued use of the Platform after notice constitutes acceptance of the updated terms.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4 text-yellow-400">13. Governing Law & Dispute Resolution</h2>
            <p>
              These terms are governed by the laws applicable to the organiser's jurisdiction. Where permitted, disputes should first be
              raised with the organiser and, if unresolved, may be referred to local dispute resolution or courts in the organiser's region.
            </p>
            <p className="mt-2">
              If you are unsure about any part of these terms or require specific legal advice, please consult a qualified professional.
            </p>
            <p className="mt-4">
              <strong>Contact:</strong>
              <br />
              For questions about these Terms & Conditions or event policies contact:
              <br />
              <span className="text-yellow-400">support@dezmilstech-company.com</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TermsAndConditions;