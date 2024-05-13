// line up

//import {useState, useEffect } from "react";


//async function getArtist(){
// const res = await fetch ("https://yielding-cooperative-tarsal.glitch.me/bands");
/*   const artists = await res.json();
  defineArtist(artists);
}
getArtists(); */



export default async function Page({ searchParams }) {
  const response = await fetch(
    `https://yielding-cooperative-tarsal.glitch.me/bands`
  );

  const data = await response.json();
  console.log(data)

  return (
<<<<<<< HEAD
    <div className="bg-[url('/lpBanner.png')] bg-cover bg-center p-12 h-screen">

    <div className='max-w-xl mx-auto'>
      <h1 className='text-White text-center'>LINE UP</h1>

          </div>


      
        <div className='flex gap-4'>
            <button className='bg-Hotpink text-White'>ALLE DAGE</button>
            <button className='bg-Hotpink text-White'>TORSDAG</button>
            <button className='bg-Hotpink text-White'>FREDAG</button>
            <button className='bg-Hotpink text-White'>LØRDAG</button>
        </div>

        <Artistcard/>
      
=======
    <div>
      {data.map(band => (

        <h1 className='text-White'>{band.name}</h1>
      ))}

      <h1 className='text-White'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda libero suscipit distinctio commodi possimus cupiditate quasi ducimus provident facere dicta obcaecati, placeat et corporis adipisci, dolores, ea ut? Neque, cupiditate.</h1>

>>>>>>> man13maj
    </div>
  )
}
