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

  return (
    <div>
      {data.map(band => (

        <h1 key={band.name} className='text-White'>{band.name}</h1>
      ))}

      <h1 className='text-White'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda libero suscipit distinctio commodi possimus cupiditate quasi ducimus provident facere dicta obcaecati, placeat et corporis adipisci, dolores, ea ut? Neque, cupiditate.</h1>

    </div>
  )
}
