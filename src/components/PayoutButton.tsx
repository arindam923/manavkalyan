"use client";

import { IconHeart } from "@tabler/icons-react";
import React from "react";

const CashfreeCheckout = () => {
  const handlePayNow = () => {
    const cashfree = window.Cashfree({
      mode: "sandbox", // or 'production'
    });

    cashfree.checkout({
      paymentSessionId:
        "session_RrZAgNlvxtRSocZlVYcBe30dN3MBsan-p3Wt07DAAhfGrVnVqbrOEy31tfgjnkDRLfbhR-bggRpRzSDkgNYRlx3M5FnZLZquSCQzHnOhqjY6",
    });
  };

  return (
    <button
      onClick={handlePayNow}
      className="flex items-center  rounded-md space-x-2 px-4 py-2 bg-primary text-white"
    >
      <span>Donate Now</span>
      <IconHeart />
    </button>
  );
};

export default CashfreeCheckout;
