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
  const pages = await res.json();

  const paths = pages.map((page) => {
    return { slug: page.slug };
  });

  return paths;
}

export default async function Page({ params }) {
  const { slug } = params;
  const url = `https://yielding-cooperative-tarsal.glitch.me/bands/${slug}`;
  const res = await fetch(url);
  const artist = await res.json();
  const imageUrl = artist.logo.startsWith("http") ? artist.logo : `https://yielding-cooperative-tarsal.glitch.me/logos/${artist.logo}`;

  // Del medlemmerne op i en liste
  const membersList = typeof artist.members === 'string'
    ? artist.members.split(',').map(member => member.trim())
    : Array.isArray(artist.members)
      ? artist.members
      : [];

  return (
    <div className='max-w-5xl mx-auto mt-12 mb-12'>
      <Image
        alt={artist.logoCredits}
        src={imageUrl}
        width={350}
        height={350}
        className='mx-auto'
      />

      <div className='mt-8'>
      <h3 className='text-Hotpink text-center text-lg sm:text-2xl font-medium mt-2'>{artist.genre}</h3>

      <h2 className="text-White text-center text-xl sm:text-5xl font-bold uppercase mt-2 mb-1 sm:mb-2">{artist.name}</h2>
      </div>

      <div className=' text-White mt-20 font-medium p-6 grid grid-cols-2 gap-4'>
        <div>
          {membersList.map((member, index) => (
            <p key={index} className='mb-1 text-3xl text-Hotpink uppercase font-semibold'>{member}{index !== membersList.length - 1 && ','}</p> 

          ))}
          <p className='max-w-80 text-lg font-normal'>are coming to the Foo Festival. Catch them live on stage and experience their electrifying performances! Get ready to rock out with your favorite artists and immerse yourself in the ultimate music experience. Dont miss out on this unforgettable event - grab your tickets now and join the excitement!</p>

      </div>
      <div>
        <p className='text-3xl text-White uppercase font-semibold'>About {artist.name}</p>
      <p className='text-White mt-5 text-lg font-normal'>{artist.bio}</p>
      </div>
    </div>

    {/*<p className='text-White mt-5 text-md '>{artist.logoCredits}</p>*/}

    </div>

  );
}
