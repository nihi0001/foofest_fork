// line up

import {useState, useEffect } from "react";


async function getArtist(){
  const res = await fetch ("https://yielding-cooperative-tarsal.glitch.me/bands");
  const artists = await res.json();
  defineArtist(artists);
}
getArtists();



//export default async function Page({searchParams}) {
 /* const params = new URLSearchParams(searchParams);
  const response = await fetch (
    `https://yielding-cooperative-tarsal.glitch.me/bands${params.toString()}`
  );

  const data = await response.json();


  return (
    <div>
     <h1 className='text-White'>{data.name}</h1> 
     <h1 className='text-White'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda libero suscipit distinctio commodi possimus cupiditate quasi ducimus provident facere dicta obcaecati, placeat et corporis adipisci, dolores, ea ut? Neque, cupiditate.</h1>
      
    </div>
  )
}*/
