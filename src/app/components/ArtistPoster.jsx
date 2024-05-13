import React from 'react'
import Link from "next/link";


function ArtistPoster() {
    return (
        <div className='flex justify-center items-center h-screen'>
            <div className='text-White'>
            <h2 className='text-center mb-5 text-4xl'>PROGRAM</h2>

                <div className='flex mb-2 gap-6 text-4xl text-center'>
                    <section className=''>Justin Bieber</section>
                    <section>SZA</section>
                    <section>Burna Boy</section>
                    <section>Tems</section>

                </div>

                <div className='flex mb-2 gap-6 text-2xl text-center'>
                    <section>Justin Bieber</section>
                    <section>SZA</section>
                    <section>Burna Boy</section>
                    <section>Tems</section>
                </div>

                <div className='flex mb-2 gap-6 text-xl text-center'>
                    <section>Justin Bieber</section>
                    <section>SZA</section>
                    <section>Burna Boy</section>
                    <section>Tems</section>
                </div>

                <div className='flex mb-2 gap-6 text-lg text-center'>
                    <section>Justin Bieber</section>
                    <section>SZA</section>
                    <section>Burna Boy</section>
                    <section>Tems</section>
                </div>

                {/* <Link className="bg-Hotpink text-white">SCHEDULE</Link>   */}

            </div>
        </div>
    )
}

export default ArtistPoster
