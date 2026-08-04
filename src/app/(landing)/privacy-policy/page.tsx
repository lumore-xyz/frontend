import React from "react";
import type { Metadata } from "next";
import { TWITTER_CREATOR, toAbsoluteUrl, withLandingKeywords } from "@/lib/landingSeo";

const PRIVACY_POLICY_URL = toAbsoluteUrl("/privacy-policy");
const CHILD_SAFETY_URL = toAbsoluteUrl("/child-safety");

export const metadata: Metadata = {
  title: "Privacy Policy | Lumore",
  description:
    "Read Lumore's Privacy Policy to understand how we collect, use, share, and protect personal information across our app and website.",
  keywords: withLandingKeywords([
    "Lumore privacy policy",
    "data privacy",
    "GDPR",
    "CCPA",
    "DPDP Act",
  ]),
  alternates: {
    canonical: PRIVACY_POLICY_URL,
  },
  openGraph: {
    title: "Privacy Policy | Lumore",
    description:
      "Read Lumore's Privacy Policy to understand how we collect, use, share, and protect personal information across our app and website.",
    url: PRIVACY_POLICY_URL,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | Lumore",
    description:
      "Read Lumore's Privacy Policy and data handling practices for app and website users.",
    creator: TWITTER_CREATOR,
  },
};

const PrivacyPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-10 text-ui-shade">
      <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">Effective Date</h2>
        <p className="mb-2">
          <strong>Effective Date:</strong> May 26, 2025
        </p>
        <p>
          <strong>Last Updated:</strong> March 3, 2026
        </p>
        <p className="mt-3">
          <strong>Child Safety Standards:</strong>{" "}
          <a
            href={CHILD_SAFETY_URL}
            className="underline text-blue-600"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://www.lumore.xyz/child-safety
          </a>
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">1. Who We Are</h2>
        <p className="mb-3">
          Lumore (&quot;Lumore,&quot; &quot;we,&quot; &quot;our,&quot; or
          &quot;us&quot;) provides a dating platform through our mobile app and
          website. This Privacy Policy explains how we collect, use, share, and
          protect personal information, and the choices and rights available to
          you.
        </p>
        <p>
          If you have questions, contact us at{" "}
          <a
            href="mailto:contact@lumore.xyz"
            className="underline text-blue-600"
          >
            contact@lumore.xyz
          </a>
          .
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          2. Information We Collect
        </h2>
        <p className="mb-2">
          We collect information you provide, information collected
          automatically, and information from partners and providers.
        </p>
        <ul className="list-disc ml-5 space-y-2 text-ui-shade/90">
          <li>
            <strong>Information you provide:</strong> account information when
            you sign in with Google Sign-In (name, email address, profile
            photo), profile details and preferences, content you submit
            (including messages, reports, support requests, feedback), and
            sensitive personal information you voluntarily provide, such as
            sexual orientation, religion, ethnicity, lifestyle, or
            health-related information.
          </li>
          <li>
            <strong>Identity verification information:</strong> we use HaloKYC for
            identity verification, which may involve a selfie/face scan and
            government ID. Lumore generally receives verification outputs such
            as verification status and related metadata needed for safety and
            fraud prevention. HaloKYC processes verification data according to its
            own terms and privacy documentation.
          </li>
          <li>
            <strong>Location information:</strong> if enabled, we collect
            location information to support location-based matching and related
            safety features. While the app is active, location may update
            periodically (approximately every 10 minutes, if enabled).
          </li>
          <li>
            <strong>Device and usage information:</strong> IP address, device
            identifiers (including advertising ID), device model, operating
            system, app version, language, time zone, network information, app
            usage events, interaction data, and crash/diagnostic logs.
          </li>
          <li>
            <strong>Advertising and analytics information:</strong> data from
            analytics and ads technologies, including Google Analytics, Meta
            Ads, Google Ads, and AdMob (including Rewarded Ads), such as ad
            impressions, clicks, campaign attribution, and engagement metrics.
          </li>
          <li>
            <strong>Information from other users or third parties:</strong>{" "}
            reports, blocks, complaints, and security, fraud, or
            compliance-related signals.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          3. How We Use Information
        </h2>
        <ul className="list-disc ml-5 space-y-2 text-ui-shade/90">
          <li>
            Create and manage your account and provide core app functionality.
          </li>
          <li>Enable matching, discovery, and location-based features.</li>
          <li>Operate messaging and communication features.</li>
          <li>Verify identity and improve trust and safety.</li>
          <li>
            Detect, prevent, and investigate abuse, fraud, policy violations,
            and illegal activity.
          </li>
          <li>Provide customer support and respond to requests.</li>
          <li>
            Analyze usage and improve product features, reliability, and
            performance.
          </li>
          <li>
            Deliver, measure, and optimize advertising and monetization,
            including Rewarded Ads.
          </li>
          <li>
            Comply with legal obligations, enforce terms, and resolve disputes.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          4. Legal Bases for Processing (EEA/UK - GDPR)
        </h2>
        <p className="mb-3">
          If you are in the EEA or UK, we process personal data under one or
          more of these legal bases:
        </p>
        <ul className="list-disc ml-5 space-y-2 text-ui-shade/90">
          <li>
            <strong>Contract:</strong> processing needed to provide Lumore
            services you request (account, matching, messaging, support).
          </li>
          <li>
            <strong>Consent:</strong> where required, including optional
            sensitive profile fields, location permissions, and certain
            marketing/advertising activities.
          </li>
          <li>
            <strong>Legitimate Interests:</strong> platform safety, security
            monitoring, fraud prevention, service analytics, product
            improvement, and business operations, where not overridden by your
            rights.
          </li>
          <li>
            <strong>Legal Obligation:</strong> compliance with applicable laws,
            law enforcement requests, and regulatory duties.
          </li>
          <li>
            <strong>Vital Interests/Public Interest:</strong> where applicable
            under law, such as urgent safety matters.
          </li>
        </ul>
        <p className="mt-3">
          You can withdraw consent at any time. Withdrawal does not affect prior
          lawful processing.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          5. Sharing and Disclosure
        </h2>
        <p className="mb-3">
          We share personal information only as needed for the purposes in this
          Policy, including with:
        </p>
        <ul className="list-disc ml-5 space-y-2 text-ui-shade/90">
          <li>
            Service providers/processors supporting hosting, authentication,
            analytics, ads, customer support, moderation, and security.
          </li>
          <li>Google Sign-In for authentication services.</li>
          <li>HaloKYC for identity verification workflows.</li>
          <li>
            Advertising and analytics partners such as Google Analytics, Meta
            Ads, Google Ads, and AdMob.
          </li>
          <li>
            AI service providers (including Google Gemini) for approved
            processing use cases.
          </li>
          <li>
            Other users as part of profile visibility and app interactions,
            based on your settings and app functionality.
          </li>
          <li>
            Legal and regulatory authorities when required by law or to protect
            rights, safety, and platform integrity.
          </li>
          <li>
            Corporate transaction parties in connection with mergers,
            acquisitions, financing, or asset transfers, subject to applicable
            safeguards.
          </li>
        </ul>
        <p className="mt-3">
          Lumore does not sell personal information for monetary consideration.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          6. Advertising, Analytics, and Tracking
        </h2>
        <p className="mb-3">
          We use SDKs and similar technologies in our app and cookies/similar
          technologies on our website to understand usage and performance,
          measure campaign effectiveness, show and optimize ads (including
          Rewarded Ads), and prevent fraud and abuse.
        </p>
        <p className="mb-3">
          Partners may process identifiers and usage data for ad measurement
          and, in some cases, cross-context behavioral advertising.
        </p>
        <p className="font-semibold mb-2">How to limit ad tracking</p>
        <ul className="list-disc ml-5 space-y-2 text-ui-shade/90">
          <li>Use in-app privacy settings where available.</li>
          <li>
            On Android: Settings &gt; Privacy &gt; Ads (options may include
            deleting/resetting advertising ID or limiting ad personalization).
          </li>
          <li>
            On iOS: Settings &gt; Privacy &amp; Security &gt; Tracking (you can
            disable app tracking permissions).
          </li>
          <li>
            You can also adjust cookie controls in your browser for the website.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          7. AI and Automated Processing
        </h2>
        <p className="mb-3">
          Lumore uses Google Gemini and related tools to assist with:
        </p>
        <ul className="list-disc ml-5 space-y-2 text-ui-shade/90">
          <li>Matching insights and relevance improvements.</li>
          <li>Safety and moderation assistance.</li>
          <li>Improving algorithms and service quality.</li>
        </ul>
        <p className="mt-3">
          These tools support human-managed processes. Lumore does not make
          decisions based solely on automated processing that produce legal
          effects or similarly significant effects on you.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">8. Data Retention</h2>
        <p className="mb-3">
          We keep personal information only for as long as reasonably necessary
          for the purposes described in this Policy, including legal, safety,
          and dispute-related needs.
        </p>
        <p className="font-semibold mb-2">Typical retention approach</p>
        <ul className="list-disc ml-5 space-y-2 text-ui-shade/90">
          <li>
            Account/Profile Data: retained while your account is active and for
            a limited period afterward as needed for legal, safety, and backup
            purposes.
          </li>
          <li>
            Messages: deleted from active systems within approximately 24 hours,
            except where retention is needed for safety investigations, abuse
            prevention, legal compliance, or dispute resolution.
          </li>
          <li>
            Identity Verification: Lumore generally retains verification
            status/results needed for trust and safety; HaloKYC retains and
            processes verification inputs under its own terms.
          </li>
          <li>
            Location/Usage/Diagnostics: retained for operational, analytics,
            safety, and security needs, then deleted, aggregated, or
            de-identified where feasible.
          </li>
          <li>
            Legal Holds: certain data may be retained longer where required by
            law or formal legal process.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          9. Your Privacy Rights and Choices
        </h2>
        <p className="mb-3">
          You can manage many privacy settings in the app. You may also contact
          us at{" "}
          <a
            href="mailto:contact@lumore.xyz"
            className="underline text-blue-600"
          >
            contact@lumore.xyz
          </a>
          .
        </p>

        <p className="font-semibold mb-2">A. Account and data deletion</p>
        <p className="mb-2">You can request deletion at any time:</p>
        <ol className="list-decimal ml-5 space-y-1 text-ui-shade/90 mb-3">
          <li>Open Lumore.</li>
          <li>Go to Profile &gt; Settings &gt; Account.</li>
          <li>Select Delete Account and follow the confirmation steps.</li>
        </ol>
        <p className="mb-4">
          If you cannot access the app, email{" "}
          <a
            href="mailto:contact@lumore.xyz"
            className="underline text-blue-600"
          >
            contact@lumore.xyz
          </a>{" "}
          with subject line: Account Deletion Request. We may keep limited data
          where needed for legal compliance, fraud prevention, safety, or
          dispute resolution.
        </p>

        <p className="font-semibold mb-2">B. Manage location permissions</p>
        <ul className="list-disc ml-5 space-y-1 text-ui-shade/90 mb-4">
          <li>Turn off location access in your device settings at any time.</li>
          <li>
            If location access is disabled, some matching features may be
            reduced or unavailable.
          </li>
        </ul>

        <p className="font-semibold mb-2">C. EEA/UK (GDPR) rights</p>
        <p className="mb-2">
          Subject to legal conditions and exceptions, you may request:
        </p>
        <ul className="list-disc ml-5 space-y-1 text-ui-shade/90 mb-4">
          <li>Access to your personal data.</li>
          <li>Rectification of inaccurate data.</li>
          <li>Erasure of data.</li>
          <li>Restriction of processing.</li>
          <li>Data portability.</li>
          <li>
            Objection to processing, including certain legitimate-interest
            processing.
          </li>
          <li>Withdrawal of consent at any time.</li>
          <li>Complaint to your local supervisory authority.</li>
        </ul>

        <p className="font-semibold mb-2">D. India (DPDP Act, 2023) rights</p>
        <p className="mb-2">If applicable, you may request:</p>
        <ul className="list-disc ml-5 space-y-1 text-ui-shade/90 mb-2">
          <li>Information about personal data being processed.</li>
          <li>
            Correction, completion, updating, and erasure of personal data.
          </li>
          <li>Withdrawal of consent.</li>
          <li>Grievance redressal.</li>
          <li>
            Nomination of another person to exercise rights in accordance with
            law.
          </li>
        </ul>
        <p className="mb-4">
          To submit a DPDP request or grievance, email{" "}
          <a
            href="mailto:contact@lumore.xyz"
            className="underline text-blue-600"
          >
            contact@lumore.xyz
          </a>{" "}
          with subject line: DPDP Request or DPDP Grievance. We will address
          requests according to applicable legal timelines.
        </p>

        <p className="font-semibold mb-2">E. California (CCPA/CPRA) rights</p>
        <p className="mb-2">California residents may have the right to:</p>
        <ul className="list-disc ml-5 space-y-1 text-ui-shade/90 mb-2">
          <li>
            Know the categories and specific pieces of personal information we
            collect, use, disclose, and share.
          </li>
          <li>Delete personal information, subject to exceptions.</li>
          <li>Correct inaccurate personal information.</li>
          <li>Opt out of sale or sharing of personal information.</li>
          <li>Non-discrimination for exercising privacy rights.</li>
        </ul>
        <p className="mb-2">California categories we collect (examples):</p>
        <ul className="list-disc ml-5 space-y-1 text-ui-shade/90 mb-2">
          <li>
            Identifiers (name, email, IP address, device identifiers,
            advertising ID).
          </li>
          <li>Internet or network activity (usage logs, app interactions).</li>
          <li>Geolocation data.</li>
          <li>Profile and preference data.</li>
          <li>
            Sensitive personal information you choose to provide, such as sexual
            orientation, religion, ethnicity, lifestyle, and health-related
            information.
          </li>
          <li>Inferences drawn from activity and preferences.</li>
        </ul>
        <p className="mb-2">
          Lumore does not sell personal information for money.
        </p>
        <p className="mb-2">
          Some disclosures to advertising partners may be considered sharing for
          cross-context behavioral advertising under California law.
        </p>
        <p>
          To opt out, use the in-app privacy control labeled Do Not Sell or
          Share My Personal Information (where available), or email{" "}
          <a
            href="mailto:contact@lumore.xyz"
            className="underline text-blue-600"
          >
            contact@lumore.xyz
          </a>{" "}
          with subject line: California Privacy Request. Authorized agents may
          submit requests on your behalf as permitted by law.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          10. International Data Transfers
        </h2>
        <p className="mb-3">
          Lumore and our service providers may process information in countries
          other than where you live, including countries that may have different
          data protection laws.
        </p>
        <p className="mb-2">
          Where required, we use appropriate safeguards for cross-border
          transfers, such as:
        </p>
        <ul className="list-disc ml-5 space-y-1 text-ui-shade/90 mb-2">
          <li>Standard Contractual Clauses, or UK equivalent mechanisms.</li>
          <li>Adequacy decisions where available.</li>
          <li>
            Contractual and technical safeguards designed to protect personal
            information.
          </li>
        </ul>
        <p>
          For India users, cross-border processing is handled in accordance with
          applicable Indian law.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">11. Security</h2>
        <p className="mb-3">
          We use reasonable administrative, technical, and organizational
          measures designed to protect personal information, including controls
          for access management, encryption in transit where appropriate,
          monitoring, and incident response practices.
        </p>
        <p>
          No system is fully secure, and we cannot guarantee absolute security.
          You are responsible for maintaining the confidentiality of your login
          credentials and using secure devices and networks.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          12. Children&apos;s Privacy
        </h2>
        <p className="mb-3">
          Lumore is intended for adults 18+ only. We use age screening and do
          not knowingly permit users under 18. If we learn an account belongs to
          someone under 18, we will take steps to remove the account and delete
          associated data as required by law.
        </p>
        <p>
          If you believe a minor has used Lumore, contact{" "}
          <a
            href="mailto:contact@lumore.xyz"
            className="underline text-blue-600"
          >
            contact@lumore.xyz
          </a>
          .
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          13. Changes to This Privacy Policy
        </h2>
        <p>
          We may update this Privacy Policy from time to time. We will post the
          updated version and revise the Last Updated date. Where required by
          law, we will provide additional notice, such as in-app notice or
          email, before material changes take effect.
        </p>
      </section>

      <section className="mb-4">
        <h2 className="text-2xl font-semibold mb-3">14. Contact Us</h2>
        <p className="mb-1">
          For privacy questions, rights requests, grievances, or complaints,
          contact:
        </p>
        <p className="mb-1">
          <strong>Lumore Privacy Team</strong>
        </p>
        <p>
          <strong>Email:</strong>{" "}
          <a
            href="mailto:contact@lumore.xyz"
            className="underline text-blue-600"
          >
            contact@lumore.xyz
          </a>
        </p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
