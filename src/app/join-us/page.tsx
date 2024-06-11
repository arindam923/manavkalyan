import VolunteerForm from "@/components/JoinusForm";
import { Metadata } from "next";
import React from "react";

type Props = {};

export const metadata: Metadata = {
  title: "MANAV KALYAN VIDHYAPEETH SANSTHAN - Join US",
  description:
    "Welcome to MANAV KALYAN VIDHYAPEETH SANSTHAN. Learn about our mission and how you can help.",
};

export default function page({}: Props) {
  return (
    <main className="container mx-auto py-5">
      <VolunteerForm />
    </main>
  );
}
