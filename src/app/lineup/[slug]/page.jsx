// single view artist/band

import React from 'react'
import Image from "next/image";
import { Bowlby_One } from "next/font/google";
 
const BowlbyOne = Bowlby_One({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});



export const metadata = {
  title: "",
  description: "",
};

export async function generateStaticParams() {
  const res = await fetch("https://yielding-cooperative-tarsal.glitch.me/bands/");
  const pages = await res.json()

  const paths = pages.map((page) => {
    return { slug: page.slug };
  });

  return paths;
}


export default async function Page({ params }) {
  const { slug } = params;
  const url = `https://yielding-cooperative-tarsal.glitch.me/bands/${slug}`;
  const res = await fetch(url);
  const artist = await res.json()
  const imageUrl = artist.logo.startsWith("http") ? artist.logo : `https://yielding-cooperative-tarsal.glitch.me/logos/${artist.logo}`;
  
  return (
    <div className='max-w-2xl mx-auto mt-12 mb-12'>
       <Image
        alt="Artist presentation"
        src={imageUrl}
        width={350}
        height={350}
        className='mx-auto'
      />
      <h2 className={`text-White text-center text-4xl mt-5 ${BowlbyOne.className}`}>{artist.name}</h2>
      <h3 className='text-Hotpink text-center font-medium mt-2 text-xl'>{artist.genre}</h3>
      <p className='bg-Hotpink text-Navyblue mt-8 p-2 text-center font-medium'>{artist.members}</p>

      <p className='text-White mt-5 text-md leading-6 font-normal	'>{artist.bio}</p>

      <p className='text-White mt-5 text-md leading-6'>{artist.logoCredits}</p>

    </div>
  );
}


