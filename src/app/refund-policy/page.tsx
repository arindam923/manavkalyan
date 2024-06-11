import React from "react";

type Props = {};

export default function page({}: Props) {
  return (
    <main className="container mx-auto py-5">
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
        <div className="bg-white shadow-md rounded-lg p-8 max-w-lg w-full">
          <h1 className="text-2xl font-bold mb-4 text-center text-gray-800">
            Refund and Return Policy
          </h1>
          <p className="text-gray-700 mb-6">
            Thank you for your support and contributions to MANAV KALYAN
            VIDHYAPEETH SANSTHAN. We appreciate your commitment to our cause.
          </p>
          <p className="text-gray-700 mb-6">
            Please note that all donations made to MANAV KALYAN VIDHYAPEETH
            SANSTHAN are non-refundable. As a non-profit organization, we rely
            on the generosity of our donors to support our various programs and
            initiatives. Once a donation is made, it is immediately put to work
            to benefit the community and support our mission.
          </p>
          <p className="text-gray-700 mb-6">
            We do not offer any returns or refunds for any donations or
            contributions made. We encourage you to reach out to us if you have
            any questions or concerns before making a donation. Our team is here
            to assist you and provide any information you need.
          </p>
          <p className="text-gray-700 mb-6">
            Thank you for understanding and for your continued support of MANAV
            KALYAN VIDHYAPEETH SANSTHAN.
          </p>
          <p className="text-gray-700 text-center">
            <strong>Contact Us:</strong> <br />
            If you have any questions, please contact us at{" "}
            <a href="mailto:support@manavkalyan.org" className="text-blue-500">
              support@manavkalyan.org
            </a>
            .
          </p>
        </div>
      </div>
    </main>
  );
}
