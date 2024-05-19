"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Bowlby_One } from "next/font/google";

const BowlbyOne = Bowlby_One({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

function ActCard({ name, genre, start, end, src, slug, day }) {

  return (
    <motion.article
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{once: true,}}
      className="min-w-fit snap-start rounded-lg overflow-hidden relative mb-10 border-2 border-Hotpink"
    >
      <Link href={`/lineup/${slug}`} key={slug}>
        {src && src.startsWith("http") ? (
          <img
            src= "/dummyImage.jpg"
            className="aspect-square object-cover mx-auto relative"
            width={250}
            height={250}
            alt="product image"
          />
        ) : (
          <img
          src= "/dummyImage.jpg"
          className="aspect-square object-cover mx-auto relative"
          width={250}
          height={250}
          alt="product image"
        />
        )}
        <div className="absolute inset-x-0 bottom-0 pt-40 pl-2 bg-gradient-to-t from-fooGrey-800 to-transparent-200">
          <p className="text-White font-bold">{genre}</p>
          <h2 className={`text-xl ${BowlbyOne.className} text-Hotpink mb-2`}>
            {name}
          </h2>
          <div className="flex items-baseline gap-2">
            <h3 className="text-xl lg:text-2xl text-White ">
              {start} - {end}
            </h3>
            <p className="text-White ">{day}</p>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}

export default ActCard;