"use client";

import React, { useState } from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";

const VolunteerForm = () => {
  return (
    <div>
      <h1 className="text-2xl lg:text-4xl font-bold lg:leading-normal">
        Before we start, we&apos;d like to get <br />
        know you better
      </h1>

      <form className="max-w-4xl w-full mt-5 space-y-4">
        <div className="flex m gap-4 items-center">
          <div className="max-w-4xl w-full">
            <Label className="text-xs mb-4">Your Name</Label>
            <Input placeholder="Full Name" />
          </div>
          <div className="max-w-4xl w-full">
            <Label className="text-xs mb-4">Your Email</Label>
            <Input placeholder="Email Address" type="email" />
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <div className="max-w-4xl w-full">
            <Label className="text-xs mb-4">Your Phone Number</Label>
            <Input placeholder="Phone Number" />
          </div>
          <div className="max-w-4xl w-full">
            <Label className="text-xs mb-4">Your Skills</Label>
            <Input placeholder="Skills" type="text" />
          </div>
        </div>
        <div>
          <Label className="text-xs mb-4">Your Avavility</Label>
          <Input placeholder="Avaliablity" type="text" />
        </div>
        <div>
          <Label className="text-xs mb-4">Any Message For us?</Label>
          <Textarea placeholder="Message" rows={4} />
        </div>
        <Button className="max-w-md w-full text-white">Submit</Button>
      </form>
    </div>
  );
};

export default VolunteerForm;
