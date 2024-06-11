import Link from "next/link";
import BytheNumber from "@/components/sections/BytheNumber";
import GetUsaHand from "@/components/sections/GetUsaHand";
import MeetOurTeam from "@/components/sections/MeetOurTeam";
import NeedResponse from "@/components/sections/NeedResponse";
import NewsLetterSubscription from "@/components/sections/NewsLetterSubscription";
import Mission, { missionData } from "@/components/sections/OurMission";
import OurAchievements from "@/components/sections/Ouracheivement";
import Whatwedo from "@/components/sections/Whatwedo";
import ApnaPatShala from "@/components/sections/ApnaPatShaha";
import InterNationStudents from "@/components/sections/InternationStudents";
import CoronaSection from "@/components/sections/CoronaSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="flex items-center lg:space-x-6 w-full p-5 lg:p-10">
        <div className="lg:w-1/2">
          <p className="text-sm mb-4 font-semibold uppercase text-primary">
            Empower Communities
          </p>
          <h1 className="text-3xl lg:text-6xl font-bold lg:leading-normal leading-10">
            Transforming Lives Through Collective Efforts
          </h1>
          <p className="text-sm mt-2 text-slate-700">
            Join us in our mission to create lasting change. Through our diverse
            charity initiatives and dynamic crowdsourcing events, we aim to
            uplift communities, provide essential resources, and foster
            sustainable development.
          </p>
          <div className="flex mt-4 items-center space-x-5">
            <Link
              href={"/donation"}
              className="max-w-sm w-full bg-primary py-2 text-white text-center font-semibold rounded-md shadow-md hover:bg-primary-dark transition duration-300"
            >
              Donate Now
            </Link>
            <Link
              href={"/contact"}
              className="max-w-sm w-full bg-transparent py-2 text-primary border border-primary text-center font-semibold rounded-md shadow-md hover:bg-primary hover:text-white transition duration-300"
            >
              Get Involved
            </Link>
          </div>
        </div>
        <div className="relative hidden lg:w-1/2 lg:flex items-center justify-center">
          <img src="https://s6.imgcdn.dev/3a2Ah.jpg" alt="bg" className="" />
        </div>
      </div>
      <Whatwedo />
      <NeedResponse />
      <GetUsaHand />
      <OurAchievements />
      {/* <MeetOurTeam /> */}
      <ApnaPatShala />
      <InterNationStudents />
      <CoronaSection />
      {/* <Mission title={missionData.title} sections={missionData.sections} /> */}
      <BytheNumber />
      <NewsLetterSubscription />
    </main>
  );
}
