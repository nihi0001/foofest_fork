// line up

//import {useState, useEffect } from "react";


//async function getArtist(){
// const res = await fetch ("https://yielding-cooperative-tarsal.glitch.me/bands");
/*   const artists = await res.json();
  defineArtist(artists);
}
getArtists(); */

import Image from "next/image";




export default async function Page({ searchParams }) {

  // første url
  const response = await fetch(
    `https://yielding-cooperative-tarsal.glitch.me/bands`
  );
  const data = await response.json();
  console.log(data)


  // hvad siden returnere
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
      {data.map(band => (

        <div key={band.name}>


          <Image
            alt="Artist presentation"
            src={`https://yielding-cooperative-tarsal.glitch.me/logos/${band.logo}`}
            width={200}
            height={200}
          />
          <h2 className='text-White'>{band.genre}</h2>
          <h1 className='text-White'>{band.name}</h1>


        </div>
      ))}


    </div>
  );
}
