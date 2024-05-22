"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Bowlby_One } from "next/font/google";
import Image from 'next/image';

const BowlbyOne = Bowlby_One({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

function ActCard({ name, genre, start, end, src, slug, day, scene }) {

  return (
    <motion.article
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="rounded-lg mb-10 border-2 border-Hotpink hover:scale-105"
    >

        <Link href={`/lineup/${slug}`} prefetch={false}>
        <div className="bg-Darkblue hover:bg-Navyblue grid grid-cols-3">

          <section>
            <p className="text-3xl text-White font-semibold">{name}</p>
            <p className="text-White text-xl">{genre}</p>
          </section>

          <section className="text-center">
            <p className="text-2xl text-Hotpink">
              {start} - {end}
            </p>
            <p className="text-White text-2xl uppercase">{day}</p>
          </section>

          <section className="relative flex items-center justify-center">
            <div className="relative w-full h-48">
            <Image
              alt="Artist presentation"
              src={src.startsWith("http") ? src : `https://yielding-cooperative-tarsal.glitch.me/logos/${src}`}
              layout="none"
              objectFit="contain"
              className="h-full w-full rounded-xl"
            />
            </div>
          </section>
          </div>

        </Link>
    </motion.article>
  );
}

export default ActCard;
