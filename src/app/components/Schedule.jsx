"use client";
import React, { useState, useEffect } from "react";
import ActCard from "./ActCard";
import { motion } from "framer-motion";
import Loader from "./Loader";
import { Bowlby_One } from "next/font/google";

const BowlbyOne = Bowlby_One({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

function Schedule({ newArray, days }) {
  const [selectedDay, setSelectedDay] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  // useEffect bruges her, så hver gang siden indlæses, så vises de artister der spiller idag, så der ikke bare er en blank side
  useEffect(() => {
    const today = new Date()
      .toLocaleDateString("en", { weekday: "short" })
      .toLowerCase();
    setSelectedDay(today);

    // Loading Animation
    if (newArray) {
      setIsLoading(false);
    }
  }, [newArray]);

  // Opdaterer den valgte dag
  const filterActsByDay = (day) => {
    setSelectedDay(day);
  };

  // Funktionen starter med at filtrerer ud fra scene og dag
  // Sorterer herefter "acts" ud fra sammenlignign af starttidspunkterne
  const sortedByTime = (scene) => {
    return newArray
      .filter((act) => act.scene === scene && act.day === selectedDay)
      .sort((a, b) => {
        const aTime = new Date(`1970-01-01T${a.eventInfo.start}`);
        const bTime = new Date(`1970-01-01T${b.eventInfo.start}`);

        return aTime.getTime() - bTime.getTime();
      });
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <div className="flex justify-center flex-wrap my-8 mb-20 gap-5">
            {days.map((day) => (
              <button
                key={day}
                className={`text-xl px-4 text-White p-1 w-20 rounded-full bg-Hotpink uppercase transition ease-in-out hover:-translate-y-1 hover:scale-110  hover:bg-Navyblue duration-300 cursor-pointer focus:text-White`}
                onClick={() => filterActsByDay(day)}
              >
                {day}
              </button>
            ))}
          </div>
          <section>
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 2 }}
              viewport={{ once: true }}
              className={`text-xl ${BowlbyOne.className} mb-5 text-White text-center`}
            >
              Midgard
            </motion.h3>
            <div className="flex gap-8 overflow-x-scroll  mb-20 snap-mandatory snap-x max-w-7xl mx-auto">
              {/* Vi mapper med sortedByTime istedet for newArray (filtreringen sker i sortedByTime istedt for her) */}
              {sortedByTime("Midgard").map((act) => (
                <ActCard
                  slug={act.slug}
                  src={act.logo}
                  key={act.name}
                  name={act.name}
                  genre={act.genre}
                  start={act.eventInfo.start}
                  end={act.eventInfo.end}
                  day={act.day}
                />
              ))}
            </div>

            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className={`text-2xl ${BowlbyOne.className} mb-5 text-White text-center`}
            >
              Vanaheim
            </motion.h3>
            <div className="flex gap-8 overflow-x-scroll mb-20 snap-mandatory snap-x max-w-7xl mx-auto">
              {sortedByTime("Vanaheim").map((act) => (
                <ActCard
                  slug={act.slug}
                  src={act.logo}
                  key={act.name}
                  name={act.name}
                  genre={act.genre}
                  start={act.eventInfo.start}
                  end={act.eventInfo.end}
                  day={act.day}
                />
              ))}
            </div>

            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className={`text-2xl ${BowlbyOne.className} mb-5 text-White text-center`}
            >
              Jotunheim
            </motion.h3>
            <div className="flex gap-8 overflow-x-scroll mb-20 snap-mandatory snap-x max-w-7xl mx-auto">
              {sortedByTime("Jotunheim").map((act) => (
                <ActCard
                  slug={act.slug}
                  src={act.logo}
                  key={act.name}
                  name={act.name}
                  genre={act.genre}
                  start={act.eventInfo.start}
                  end={act.eventInfo.end}
                  day={act.day}
                />
              ))}
            </div>
          </section>
        </div>
      )}
    </>
  );
}

export default Schedule;