// line up

//import {useState, useEffect } from "react";


//async function getArtist(){
// const res = await fetch ("https://yielding-cooperative-tarsal.glitch.me/bands");
/*   const artists = await res.json();
  defineArtist(artists);
}
getArtists(); */

import Image from "next/image";
import Link from "next/link";




export default async function Page({ searchParams }) {

  // første url
  const response = await fetch(
    `https://yielding-cooperative-tarsal.glitch.me/bands`
  );
  const data = await response.json();
  console.log(data)


  // hvad siden returnere

  return <section>
    {data.map((band) => {
      return <div key={band.name}>
        <Link href={`/lineup/${band.slug}`} prefetch={false}>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto">

            <div className="border-2 border-Hotpink p-2 rounded-sm">
              <Image
                alt="Artist presentation"
                src={`https://yielding-cooperative-tarsal.glitch.me/logos/${band.logo}`}
                width={350}
                height={350}
              />
              <h2 className='text-White mt-5'>{band.genre}</h2>
              <h1 className='text-Hotpink text-2xl'>{band.name}</h1>

            </div>



          </div>
        </Link>
      </div>
    })}
  </section>

}
