import { Metadata } from "next";
import React from "react";

type Props = {};

export const metadata: Metadata = {
  title: "MANAV KALYAN VIDHYAPEETH SANSTHAN - Privacy Policy",
  description:
    "Welcome to MANAV KALYAN VIDHYAPEETH SANSTHAN. Learn about our mission and how you can help.",
};

export default function page({}: Props) {
  return (
    <main className="container mx-auto py-5">
      <div className="max-w-4xl mx-auto p-4">
        <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>

        <p className="mb-4">
          <strong>MANAV KALYAN VIDHYAPEETH SANSTHAN</strong> we are committed to
          protecting the privacy of our donors, volunteers, and website
          visitors. This Privacy Policy outlines how we collect, use, disclose,
          and protect your personal information. By visiting our website and
          providing your information, you agree to the terms of this Privacy
          Policy.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
        <ul className="list-disc list-inside mb-4">
          <li>
            <strong>Name</strong>
          </li>
          <li>
            <strong>Email Address</strong>
          </li>
          <li>
            <strong>Phone Number</strong>
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">
          How We Use Your Information
        </h2>
        <p className="mb-4">
          We use the information we collect for the following purposes:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>
            <strong>Processing Donations:</strong> To process and acknowledge
            your donations, and to send you receipts.
          </li>
          <li>
            <strong>Communication:</strong> To respond to your inquiries, send
            you updates about our activities, and keep you informed about our
            events, campaigns, and volunteer opportunities.
          </li>
          <li>
            <strong>Volunteer Coordination:</strong> To manage volunteer
            applications, schedule volunteer activities, and communicate with
            our volunteers.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">
          Information Sharing and Disclosure
        </h2>
        <p className="mb-4">
          We do not sell, trade, or rent your personal information to others. We
          may share your information with trusted third parties who assist us in
          operating our website, conducting our business, or providing services
          to you, as long as those parties agree to keep this information
          confidential.
        </p>
        <p className="mb-4">
          We may also disclose your information when we believe it is
          appropriate to comply with the law, enforce our site policies, or
          protect ours or others&apos; rights, property, or safety.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
        <p className="mb-4">
          We implement a variety of security measures to maintain the safety of
          your personal information. Your personal information is stored in
          secure networks and is only accessible by a limited number of persons
          who have special access rights to such systems and are required to
          keep the information confidential.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Your Consent</h2>
        <p className="mb-4">
          By using our website and providing your information, you consent to
          this Privacy Policy.
        </p>

        <h2 className="text-2xl font-semibold mb-4">
          Changes to Our Privacy Policy
        </h2>
        <p className="mb-4">
          We reserve the right to update or change our Privacy Policy at any
          time. Any changes to this policy will be posted on this page. We
          encourage you to review this Privacy Policy periodically to stay
          informed about how we are protecting your information.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
        <p className="mb-4">
          If you have any questions about this Privacy Policy, please contact us
          at:
        </p>
        <ul className="list-none mb-4">
          <li>
            <strong>Email:</strong> helpmanavkalyan@gmail.com
          </li>
          <li>
            <strong>Phone:</strong> 7062885333
          </li>
        </ul>

        <p className="mb-4">
          Thank you for supporting{" "}
          <strong>MANAV KALYAN VIDHYAPEETH SANSTHAN</strong>.
        </p>
      </div>
    </main>
  );
}
