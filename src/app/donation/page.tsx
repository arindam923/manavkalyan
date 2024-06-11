import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Metadata } from "next";
import React from "react";

type Props = {};

export const metadata: Metadata = {
  title: "MANAV KALYAN VIDHYAPEETH SANSTHAN - Donation",
  description:
    "Welcome to MANAV KALYAN VIDHYAPEETH SANSTHAN. Learn about our mission and how you can help.",
};

export default function page({}: Props) {
  return (
    <div className="container mx-auto py-5">
      <h2 className="text-2xl font-semibold">Make a contribution</h2>

      <form className="space-y-2 mt-4">
        <div className="space-y-1">
          <Label htmlFor="name" className="text-xs">
            Full Name
          </Label>
          <Input type="text" id="name" placeholder="Enter your name" />
        </div>
        <div className="space-y-1">
          <Label className="text-xs" htmlFor="email">
            Email Address
          </Label>
          <Input type="email" id="email" placeholder="Enter your Email" />
        </div>

        <div className="space-y-1">
          <Label className="text-xs" htmlFor="phone">
            Phone Number
          </Label>
          <Input
            type="phone"
            id="phone"
            placeholder="Enter your Phone Number"
          />
        </div>
        <div className="space-y-1">
          <Label className="text-xs" htmlFor="amount">
            Type the amount
          </Label>
          <Input
            type="text"
            id="amount"
            placeholder="Enter your Desired Amount"
          />
        </div>
        <div>
          <button
            className="px-2 py-1 text-xs bg-gray-200 rounded-md hover:bg-gray-300"
            // onClick={() => setAmount('500')}
          >
            500
          </button>
          <button
            className="px-2 py-1 text-xs bg-gray-200 rounded-md hover:bg-gray-300 ml-2"
            // onClick={() => setAmount('1000')}
          >
            1000
          </button>
          <button
            className="px-2 py-1 text-xs bg-gray-200 rounded-md hover:bg-gray-300 ml-2"
            // onClick={() => setAmount('10000')}
          >
            10000
          </button>
        </div>

        <Button className="w-full py-2 mt-4 text-white">Pay</Button>
      </form>
    </div>
  );
}
