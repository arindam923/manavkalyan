"use client";

import { IconHeart } from "@tabler/icons-react";
import React from "react";

const CashfreeCheckout = () => {
  const handlePayNow = () => {};

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
