import VolunteerForm from "@/components/JoinusForm";
import React from "react";

type Props = {};

export default function page({}: Props) {
  return (
    <main className="container mx-auto py-5">
      <VolunteerForm />
    </main>
  );
}
