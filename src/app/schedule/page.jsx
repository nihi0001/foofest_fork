import React from "react";
import Schedule from "@/app/components/Schedule";
import { Bowlby_One } from "next/font/google";

const BowlbyOne = Bowlby_One({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata = {
  title: "FooFest | Schedule",
};


async function SchedulePage() {
  // Merger to links sammen. Bands og schedule
  const bands = await fetch(
    "https://yielding-cooperative-tarsal.glitch.me/bands"
  ).then((r) => r.json());
  const schedule = await fetch(
    "https://yielding-cooperative-tarsal.glitch.me/schedule"
  ).then((r) => r.json());

  const scenes = ["Midgard", "Jotunheim", "Vanaheim"];
  const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

  const merged = bands.map((band) => {
    const newBand = { ...band };
    scenes.forEach((scene) => {
      days.forEach((day) => {
        if (schedule[scene][day].find((item) => item.act === band.name)) {
          const eventInfo = schedule[scene][day].find(
            (item) => item.act === band.name
          );
          newBand.eventInfo = eventInfo;
          newBand.scene = scene;
          newBand.day = day;
        }
      });
    });
    return newBand;
  });

  return (
    <>
      <main>
        <h1
          className={`text-5xl ${BowlbyOne.className} text-center text-White mt-20`}
        >
          SCHEDULE
        </h1>

        <Schedule newArray={merged} days={days} />
      </main>
    </>
  );
}

export default SchedulePage;