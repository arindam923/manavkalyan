import React from "react";
import { Progress } from "@/components/ui/progress";
import { BackgroundGradient } from "@/components/ui/background-gradient";

type Props = {};

const fundraisingData = [
  {
    title: "Child Malnutrition",
    description: "Help us provide nutritious meals to children in need.",
    imageUrl: "https://s6.imgcdn.dev/3aRbO.jpg",
    targetAmount: 500000,
    collectedAmount: 20000,
  },
  {
    title: "Flood Affected Area",
    description: "Support flood victims by providing essential supplies.",
    imageUrl: "https://s6.imgcdn.dev/3afMn.jpg",
    targetAmount: 100000,
    collectedAmount: 75000,
  },
  {
    title: "Flood Affected Area",
    description: "Support flood victims by providing essential supplies.",
    imageUrl: "https://s6.imgcdn.dev/3atlg.jpg",
    targetAmount: 800000,
    collectedAmount: 75000,
  },
  // Add more items as needed
];

type FundraisingCardProps = {
  title: string;
  description: string;
  imageUrl: string;
  targetAmount: number;
  collectedAmount: number;
};

const FundraisingCard: React.FC<FundraisingCardProps> = ({
  title,
  description,
  imageUrl,
  targetAmount,
  collectedAmount,
}) => {
  const progressPercentage = (collectedAmount / targetAmount) * 100;

  return (
    <BackgroundGradient className="rounded-[22px] max-w-sm bg-white">
      <img
        src={imageUrl}
        className="rounded-t-[22px] object-contain"
        alt={title}
      />
      <div className="p-4">
        <h2 className="text-xl font-bold">{title}</h2>
        <p className="my-2 text-xs">{description}</p>

        <Progress value={progressPercentage} />
        {/* <p className="mt-2 text-xs">
          <span className="font-semibold">{`₹${collectedAmount}`}</span> raised
          of <span className="font-semibold">{`₹${targetAmount}`}</span> goal
        </p> */}

        <div className="flex items-center justify-between text-xs mt-2">
          <div>
            <p>
              raised <span className="font-bold">{collectedAmount}</span>
            </p>
          </div>
          <div>
            <p>
              target <span className="font-bold">{targetAmount}</span>
            </p>
          </div>
        </div>
        <div className="flex justify-end">
          <button className="bg-primary mt-2 px-4 text-sm font-semibold text-white py-2 rounded-md">
            Donate Now
          </button>
        </div>
      </div>
    </BackgroundGradient>
  );
};

export default function page({}: Props) {
  return (
    <main className="container py-4 mx-auto">
      <h2 className="text-2xl font-semibold text-center">Fundraising Events</h2>

      <div className="mt-5 grid grid-cols-1 gap-5 lg:grid-cols-3">
        {fundraisingData.map((fund, index) => (
          <FundraisingCard
            key={index}
            title={fund.title}
            description={fund.description}
            imageUrl={fund.imageUrl}
            targetAmount={fund.targetAmount}
            collectedAmount={fund.collectedAmount}
          />
        ))}
      </div>
    </main>
  );
}
