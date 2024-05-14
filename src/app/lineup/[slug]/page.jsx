// single view artist/band

import React from 'react'


export const metadata = {
  title: "",
  description: "",
};

 export async function generateStaticParams(){
  const res = await fetch ("https://yielding-cooperative-tarsal.glitch.me/bands/");
  const pages = await res.json()

  const paths = pages.map((page) => {
    return {slug: page.slug};
  });

  return paths;
} 


export default async function Page({params}) {
    const {slug} = params;
    const url = `https://yielding-cooperative-tarsal.glitch.me/bands/${slug}`;
    const res = await fetch(url);
  const artist = await res.json()
  console.log(artist)
  return (
    <div className='max-w-xl mx-auto'>
        <h1 className='text-White'>{artist.name}</h1>
        <p className='bg-Hotpink text-Navyblue'>Friday, July 3rd, 8:15 PM, Main stage</p>
        <p className='text-White'>{artist.bio}</p>
      
    </div>
  );
}


