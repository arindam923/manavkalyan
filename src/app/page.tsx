import GetUsaHand from "@/components/sections/GetUsaHand";
import MeetOurTeam from "@/components/sections/MeetOurTeam";
import NeedResponse from "@/components/sections/NeedResponse";
import NewsLetterSubscription from "@/components/sections/NewsLetterSubscription";
import OurAchievements from "@/components/sections/Ouracheivement";
import Whatwedo from "@/components/sections/Whatwedo";
import { IconVideo } from "@tabler/icons-react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="bg-zinc-900 flex items-center justify-between text-white  w-full p-10">
        <div className="w-1/2">
          <p className="text-sm font-semibold uppercase text-primary">
            Give someone vision
          </p>
          <h1 className="text-6xl font-bold leading-normal">
            Renewing,
            <br />
            ReBuilding and <br />
            Revitalizing <br />
            Communities
          </h1>
          <p className="text-sm mt-2 text-muted">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit rem,
            aperiam porro consequatur illo molestias totam, recusandae autem
            mollitia reiciendis officia, at eos tenetur sint.
          </p>
          <div className="flex cursor-pointer text-sm hover:underline items-center mt-2 space-x-2">
            <div className="h-10 w-10 rounded-full bg-red-500 text-white grid place-items-center">
              <IconVideo />
            </div>
            <p>Play Video</p>
          </div>
        </div>
        <div className="relative w-[600px] h-[600px]">
          {/* <Image src="/blob4.png" alt="" fill /> */}
          <Image src="/blob3.png" alt="" fill />
        </div>
      </div>
      <Whatwedo />
      <NeedResponse />
      <GetUsaHand />
      <OurAchievements />
      <MeetOurTeam />
      <NewsLetterSubscription />
    </main>
  );
}
