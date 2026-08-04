import React from "react";
import type { Metadata } from "next";
import { TWITTER_CREATOR, toAbsoluteUrl, withLandingKeywords } from "@/lib/landingSeo";

const TERMS_OF_USE_URL = toAbsoluteUrl("/terms-of-use");
const CHILD_SAFETY_URL = toAbsoluteUrl("/child-safety");

export const metadata: Metadata = {
  title: "Terms of Use | Lumore",
  description:
    "Review Lumore's Terms of Use for account eligibility, user responsibilities, subscriptions, and legal terms for using the platform.",
  keywords: withLandingKeywords([
    "Lumore terms of use",
    "terms and conditions",
    "user agreement",
    "subscription terms",
    "dating app terms",
  ]),
  alternates: {
    canonical: TERMS_OF_USE_URL,
  },
  openGraph: {
    title: "Terms of Use | Lumore",
    description:
      "Review Lumore's Terms of Use for account eligibility, user responsibilities, subscriptions, and legal terms for using the platform.",
    url: TERMS_OF_USE_URL,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms of Use | Lumore",
    description:
      "Review Lumore's Terms of Use for eligibility, account conduct, billing, and dispute terms.",
    creator: TWITTER_CREATOR,
  },
};

const TermsOfUse = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-10 text-ui-shade">
      <h1 className="text-3xl font-bold mb-8">Terms of Use</h1>

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
        <h2 className="text-2xl font-semibold mb-3">Introduction</h2>
        <p>
          These Terms of Use (&quot;Terms&quot;) govern your access to and use
          of Lumore (&quot;Lumore,&quot; &quot;we,&quot; &quot;us,&quot; or
          &quot;our&quot;), including our mobile applications, website at{" "}
          <a
            href="https://www.lumore.xyz/terms-of-use"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-blue-600"
          >
            https://www.lumore.xyz/terms-of-use
          </a>
          , and related services (collectively, the &quot;Service&quot;).
          Lumore is a location-enabled dating and matching platform.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">Acceptance of Terms</h2>
        <p className="mb-3">
          By creating an account, accessing, or using the Service, you agree to
          these Terms and our Privacy Policy. If you do not agree, do not use
          the Service.
        </p>
        <p>
          You also agree to comply with applicable laws and regulations. If you
          use the Service on behalf of an entity, you represent that you have
          authority to bind that entity to these Terms.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Eligibility (18+ only; age screening; no minors; no use under age)
        </h2>
        <p className="mb-3">
          Lumore is strictly for users who are at least 18 years old.
        </p>
        <p className="mb-2">
          By using the Service, you represent and warrant that:
        </p>
        <ul className="list-disc ml-5 space-y-1 text-ui-shade/90">
          <li>You are 18 or older.</li>
          <li>You are legally permitted to use the Service.</li>
          <li>
            You are not prohibited from using dating or social discovery
            services under applicable law.
          </li>
        </ul>
        <p className="mt-3">
          We use age-screening measures and may suspend or terminate accounts we
          reasonably believe are underage or using false age information.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Account Registration &amp; Security
        </h2>
        <p className="mb-3">
          To use key features, you must create an account using supported
          methods, including email and Google Sign-In.
        </p>
        <p className="mb-2">You agree to:</p>
        <ul className="list-disc ml-5 space-y-1 text-ui-shade/90">
          <li>Provide accurate, current, and complete information.</li>
          <li>Keep your credentials confidential and secure.</li>
          <li>Update your account information when it changes.</li>
          <li>
            Notify us promptly if you suspect unauthorized use of your account.
          </li>
        </ul>
        <p className="mt-3">
          You are responsible for activity on your account, except to the extent
          caused by our failure to use reasonable security controls.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          User Content, Rights &amp; License
        </h2>
        <p className="mb-3">
          &quot;User Content&quot; includes profile information, photos, text,
          messages, and other content you submit or make available through the
          Service.
        </p>
        <ul className="list-disc ml-5 space-y-1 text-ui-shade/90">
          <li>You retain ownership of your User Content.</li>
          <li>
            You grant Lumore a non-exclusive, worldwide, royalty-free,
            sublicensable license to host, store, process, reproduce, adapt,
            display, and distribute User Content as needed to provide, moderate,
            secure, improve, and promote the Service.
          </li>
          <li>
            You represent that you have all necessary rights and permissions to
            submit User Content.
          </li>
          <li>
            We may remove or restrict User Content that violates these Terms,
            our community policies, or applicable law.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">Prohibited Conduct</h2>
        <p className="mb-2">You must not:</p>
        <ul className="list-disc ml-5 space-y-1 text-ui-shade/90">
          <li>Use Lumore if you are under 18.</li>
          <li>Harass, threaten, abuse, stalk, or exploit any person.</li>
          <li>Impersonate others or misrepresent your identity or age.</li>
          <li>
            Share unlawful, fraudulent, defamatory, infringing, exploitative, or
            deceptive content.
          </li>
          <li>Send spam, scams, malware, or unauthorized solicitations.</li>
          <li>
            Collect, scrape, or misuse other users&apos; data without permission.
          </li>
          <li>
            Circumvent restrictions, bans, safety controls, or technical
            protections.
          </li>
          <li>
            Use bots, scripts, or automated systems to access or interact with
            the Service without authorization.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Matching, Messaging &amp; Safety
        </h2>
        <p className="mb-3">
          Lumore provides discovery, matching, and messaging features, including
          anonymous first-approach functionality in supported flows.
        </p>
        <ul className="list-disc ml-5 space-y-1 text-ui-shade/90">
          <li>
            Lumore does not guarantee matches, compatibility, response rates, or
            relationship outcomes.
          </li>
          <li>
            Messages are generally auto-deleted from active systems within
            approximately 24 hours, subject to exceptions for safety,
            investigations, legal compliance, and dispute resolution.
          </li>
          <li>
            Location features operate only with your permission and may update
            periodically in the background based on your device settings.
          </li>
          <li>
            You are solely responsible for your interactions with other users,
            including in-person meetings. Use caution and follow personal safety
            best practices.
          </li>
        </ul>
        <p className="mt-3">
          Lumore may use AI assistance, including Google Gemini, for matching
          insights, moderation support, and engagement improvements. AI outputs
          may be incomplete or inaccurate.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Identity Verification (HaloKYC) Terms
        </h2>
        <p className="mb-3">
          Lumore may offer identity verification through HaloKYC on an opt-in
          basis or as required for specific features.
        </p>
        <ul className="list-disc ml-5 space-y-1 text-ui-shade/90">
          <li>
            Verification may include selfie/face scan and government ID checks.
          </li>
          <li>
            You authorize Lumore to share necessary information with HaloKYC to
            process verification.
          </li>
          <li>
            HaloKYC is an independent third-party provider and processes data
            under its own terms and privacy policies.
          </li>
          <li>
            Lumore may receive verification status and related trust/safety
            metadata.
          </li>
          <li>
            Verification may reduce certain risks, but it does not eliminate
            fraud or misconduct.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Payment, Subscriptions &amp; Billing Terms (Explain in-app purchases,
          auto-renewal, refunds policy basics)
        </h2>
        <p className="mb-3">
          Lumore may offer paid features, virtual credits, one-time purchases,
          and auto-renewable subscriptions.
        </p>
        <ul className="list-disc ml-5 space-y-1 text-ui-shade/90 mb-3">
          <li>
            Purchases are processed by Google Play or Apple App Store, as
            applicable.
          </li>
          <li>
            Auto-renewable subscriptions renew automatically unless canceled
            before renewal through your store account settings.
          </li>
          <li>
            You authorize the applicable store platform to charge relevant fees,
            taxes, and recurring amounts.
          </li>
          <li>
            Free trials or promotions may convert to paid subscriptions unless
            canceled before the trial/promo period ends.
          </li>
          <li>
            Refund requests are generally handled under Google Play or Apple App
            Store refund rules. You may also contact{" "}
            <a href="mailto:contact@lumore.xyz" className="underline text-blue-600">
              contact@lumore.xyz
            </a>{" "}
            for support.
          </li>
        </ul>
        <p className="font-semibold mb-2">Credits Terms</p>
        <ul className="list-disc ml-5 space-y-1 text-ui-shade/90">
          <li>
            Credits are in-app units used to unlock eligible features and
            actions.
          </li>
          <li>
            Credits may be earned, purchased, or granted as part of promotions
            or referrals.
          </li>
          <li>
            Credits have no cash value, are non-transferable, and are not
            redeemable for cash except where required by law.
          </li>
          <li>
            We may adjust credits mechanics, pricing, feature eligibility, or
            earning rules with notice as required by law.
          </li>
          <li>
            We may correct, reverse, or remove credits obtained through fraud,
            abuse, technical error, or terms violations.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Third-Party Services &amp; Links (Google Sign-In, social logins,
          analytics, ads)
        </h2>
        <p className="mb-2">Lumore integrates third-party services, including:</p>
        <ul className="list-disc ml-5 space-y-1 text-ui-shade/90 mb-3">
          <li>Google Sign-In and related authentication tools.</li>
          <li>Google Analytics for analytics and usage insights.</li>
          <li>Meta Ads, Google Ads, and AdMob for advertising and monetization.</li>
          <li>HaloKYC for identity verification.</li>
          <li>Google Gemini for AI-assisted features.</li>
        </ul>
        <p>
          Third-party services are governed by their own terms and privacy
          policies. Lumore is not responsible for third-party services we do not
          control.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Intellectual Property Rights
        </h2>
        <p className="mb-3">
          Lumore and its licensors own all rights, title, and interest in the
          Service, including software, code, design, text, graphics, brand
          assets, trademarks, logos, and related intellectual property, except
          for your User Content.
        </p>
        <ul className="list-disc ml-5 space-y-1 text-ui-shade/90 mb-3">
          <li>
            You may not copy, modify, distribute, sell, lease, reverse engineer,
            or create derivative services from Lumore except as expressly
            permitted by law or written permission from us.
          </li>
          <li>
            The Lumore name, logos, product identity, and trade dress may not be
            used without prior written approval.
          </li>
        </ul>
        <p className="mb-2 font-semibold">Source Code Visibility and Contribution</p>
        <p className="mb-2">
          Lumore may make parts of its code publicly visible to support
          transparency and community contributions.
        </p>
        <p>
          Unless a separate written license expressly allows otherwise, public
          code availability does not grant permission to launch, operate, white
          label, or distribute a competing service or clone of Lumore, copy
          substantial product features/UX for competitive use, or use Lumore
          branding. Contributions submitted to Lumore may be used by Lumore
          under the project&apos;s contribution terms.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">Disclaimers</h2>
        <p className="mb-3">
          To the fullest extent permitted by law, the Service is provided on an
          &quot;as is&quot; and &quot;as available&quot; basis.
        </p>
        <p className="mb-2">Lumore does not warrant that:</p>
        <ul className="list-disc ml-5 space-y-1 text-ui-shade/90">
          <li>The Service will be uninterrupted, error-free, or always secure.</li>
          <li>Any user is who they claim to be.</li>
          <li>Any match or interaction will lead to a desired outcome.</li>
          <li>Offline meetings or interactions will be safe.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Limitation of Liability
        </h2>
        <p className="mb-3">
          To the maximum extent permitted by law, Lumore and its affiliates,
          officers, employees, agents, and licensors will not be liable for
          indirect, incidental, special, consequential, exemplary, or punitive
          damages, or for loss of profits, data, goodwill, or business
          opportunities arising from or related to your use of the Service.
        </p>
        <p className="mb-3">
          Lumore is not liable for conduct of users or third parties, including
          any offline interactions.
        </p>
        <p>
          Our aggregate liability for claims relating to the Service will not
          exceed the greater of:
        </p>
        <ol className="list-decimal ml-5 space-y-1 text-ui-shade/90 mt-2">
          <li>
            The total amount paid by you to Lumore for paid features in the 12
            months before the event giving rise to the claim, or
          </li>
          <li>INR 10,000.</li>
        </ol>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">Indemnification</h2>
        <p>
          You agree to defend, indemnify, and hold harmless Lumore and its
          affiliates, officers, employees, agents, and licensors from claims,
          liabilities, damages, losses, and expenses (including reasonable legal
          fees) arising from or related to your use of the Service, your User
          Content, your violation of these Terms, applicable law, or third-party
          rights, and your interactions with other users.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Termination of Accounts
        </h2>
        <p className="mb-3">
          You may stop using the Service at any time and may delete your account
          through in-app settings.
        </p>
        <p className="mb-3">
          We may suspend, restrict, or terminate your access immediately if we
          reasonably believe you violated these Terms, posed risk to users,
          disrupted Service integrity, or where required for legal, compliance,
          or security reasons.
        </p>
        <p>
          Certain Terms survive termination, including provisions on intellectual
          property, disclaimers, limitation of liability, indemnification, and
          dispute resolution.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Governing Law &amp; Dispute Resolution
        </h2>
        <p className="mb-3">
          These Terms are governed by the laws of India, without regard to
          conflict-of-law principles.
        </p>
        <p className="mb-3">
          Before starting formal proceedings, you and Lumore agree to attempt
          informal resolution in good faith for at least 30 days. Please send
          dispute notices to{" "}
          <a href="mailto:contact@lumore.xyz" className="underline text-blue-600">
            contact@lumore.xyz
          </a>{" "}
          with details and requested relief.
        </p>
        <p>
          For disputes that are not arbitrated, courts in Bengaluru, Karnataka,
          India will have exclusive jurisdiction, subject to mandatory consumer
          protection rights.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Arbitration / Binding Arbitration Clause (where enforceable)
        </h2>
        <p className="mb-3">
          Where permitted by law, you and Lumore agree to resolve most disputes
          by binding individual arbitration rather than court proceedings.
        </p>
        <ul className="list-disc ml-5 space-y-1 text-ui-shade/90 mb-3">
          <li>
            Scope: This applies to disputes arising out of or relating to these
            Terms or the Service, except claims eligible for small-claims court
            and claims seeking injunctive relief for intellectual property misuse
            or unauthorized service cloning.
          </li>
          <li>
            Rules and seat: Arbitration will be conducted by a sole arbitrator
            under the Arbitration and Conciliation Act, 1996, with seat and
            venue in Bengaluru, Karnataka, India, unless required otherwise by
            law.
          </li>
          <li>
            Class action waiver: To the extent enforceable, claims must be
            brought individually, not as part of any class, collective,
            consolidated, representative, or private-attorney-general action.
          </li>
          <li>
            Jury trial waiver: To the extent enforceable, each party waives any
            right to a jury trial for arbitrable disputes.
          </li>
          <li>
            Opt-out right: You may opt out of arbitration within 30 days of
            first accepting these Terms by emailing{" "}
            <a href="mailto:contact@lumore.xyz" className="underline text-blue-600">
              contact@lumore.xyz
            </a>{" "}
            with subject line &quot;Arbitration Opt-Out&quot; and your account
            details.
          </li>
        </ul>
        <p>
          If this arbitration clause is found unenforceable for a specific
          dispute, that dispute may proceed in court while the rest of these
          Terms remain in effect.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">Changes to Terms</h2>
        <p>
          We may update these Terms from time to time. Updated Terms will be
          posted with a revised Last Updated date. Where legally required, we
          will provide additional notice (for example, in-app notice or email)
          before material changes become effective. Continued use of the Service
          after updated Terms become effective means you accept the revised
          Terms.
        </p>
      </section>

      <section className="mb-4">
        <h2 className="text-2xl font-semibold mb-3">Contact Information</h2>
        <p className="mb-1">
          For legal notices, billing support, subscription questions, disputes,
          or general questions about these Terms, contact:
        </p>
        <p className="mb-1">
          <strong>Lumore</strong>
        </p>
        <p>
          <strong>Email:</strong>{" "}
          <a href="mailto:contact@lumore.xyz" className="underline text-blue-600">
            contact@lumore.xyz
          </a>
        </p>
      </section>
    </div>
  );
};

export default TermsOfUse;
