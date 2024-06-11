import { Metadata } from "next";
import React from "react";

type Props = {};

export const metadata: Metadata = {
  title: "MANAV KALYAN VIDHYAPEETH SANSTHAN - Terms & Conditions",
  description:
    "Welcome to MANAV KALYAN VIDHYAPEETH SANSTHAN. Learn about our mission and how you can help.",
};

export default function page({}: Props) {
  return (
    <main className="container mx-auto py-5">
      <div className="max-w-4xl mx-auto p-4">
        <h1 className="text-4xl font-bold mb-6">Terms and Conditions</h1>

        <p className="mb-4">
          Welcome to <strong>MANAV KALYAN VIDHYAPEETH SANSTHAN</strong>. By
          accessing or using our website, you agree to comply with and be bound
          by the following terms and conditions (Terms). Please review these
          Terms carefully. If you do not agree with these Terms, you should not
          use our website.
        </p>

        <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
        <p className="mb-4">
          By using our website, you agree to be bound by these Terms and all
          applicable laws and regulations. If you do not agree with any part of
          these Terms, you must not use our website.
        </p>

        <h2 className="text-2xl font-semibold mb-4">2. Changes to Terms</h2>
        <p className="mb-4">
          We reserve the right to modify these Terms at any time. Any changes
          will be effective immediately upon posting on our website. Your
          continued use of our website following the posting of revised Terms
          signifies your acceptance of the revised Terms.
        </p>

        <h2 className="text-2xl font-semibold mb-4">3. Use of Website</h2>
        <p className="mb-4">
          You agree to use our website only for lawful purposes and in a way
          that does not infringe the rights of, restrict, or inhibit anyone
          else&apos;s use and enjoyment of the website. Prohibited behavior
          includes harassing or causing distress or inconvenience to any other
          user, transmitting obscene or offensive content, or disrupting the
          normal flow of dialogue within our website.
        </p>

        <h2 className="text-2xl font-semibold mb-4">
          4. Intellectual Property
        </h2>
        <p className="mb-4">
          All content on our website, including but not limited to text,
          graphics, logos, and images, is the property of{" "}
          <strong>MANAV KALYAN VIDHYAPEETH SANSTHAN</strong> or its content
          suppliers and is protected by copyright, trademark, and other
          intellectual property laws. You may not reproduce, distribute, or
          create derivative works from any content without our express written
          permission.
        </p>

        <h2 className="text-2xl font-semibold mb-4">5. Donations</h2>
        <p className="mb-4">
          All donations made through our website are final and non-refundable.
          We are grateful for your support and will use the funds in accordance
          with our mission and goals.
        </p>

        <h2 className="text-2xl font-semibold mb-4">
          6. Volunteer Applications
        </h2>
        <p className="mb-4">
          By applying to volunteer with us, you agree to provide accurate and
          truthful information. We reserve the right to accept or decline any
          volunteer application at our discretion.
        </p>

        <h2 className="text-2xl font-semibold mb-4">
          7. Limitation of Liability
        </h2>
        <p className="mb-4">
          We shall not be liable for any damages arising out of or in connection
          with your use of our website. This includes, without limitation,
          direct loss, loss of business or profits, damage to your computer,
          software, systems, and programs, and the data thereon, or any other
          direct or indirect, consequential, and incidental damages.
        </p>

        <h2 className="text-2xl font-semibold mb-4">8. Governing Law</h2>
        <p className="mb-4">
          These Terms are governed by and construed in accordance with the laws
          of India. You agree to submit to the exclusive jurisdiction of the
          courts in India to resolve any dispute arising out of these Terms or
          your use of our website.
        </p>

        <h2 className="text-2xl font-semibold mb-4">9. Contact Us</h2>
        <p className="mb-4">
          If you have any questions about these Terms, please contact us at:
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
          Thank you for visiting{" "}
          <strong>MANAV KALYAN VIDHYAPEETH SANSTHAN</strong>.
        </p>
      </div>
    </main>
  );
}
