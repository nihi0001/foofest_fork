import React from 'react'

function Schedule() {
  return (
    <div>
        <button className='bg-Hotpink'>Friday july 3rd</button>

        <div>
        <h2>Torsdag</h2>
        <div className='flex border-solid border-Hotpink'>
            <section className='border-solid border-Hotpink'>Dato</section>
            <section className='border-solid border-Hotpink'>Scene</section>
            <section className='border-solid border-Hotpink'>Navn</section>
            <section className='border-solid border-Hotpink'><img src="" alt="" /></section>
        </div>

        <h2>Fredag</h2>
        <div className='flex border-solid border-Hotpink'>
            <section className='border-solid border-Hotpink'>Dato</section>
            <section className='border-solid border-Hotpink'>Scene</section>
            <section className='border-solid border-Hotpink'>Navn</section>
            <section className='border-solid border-Hotpink'><img src="" alt="" /></section>
        </div>

        <h2>Lørdag</h2>
        <div className='flex border-solid border-Hotpink'>
            <section className='border-solid border-Hotpink'>Dato</section>
            <section className='border-solid border-Hotpink'>Scene</section>
            <section className='border-solid border-Hotpink'>Navn</section>
            <section className='border-solid border-Hotpink'><img src="" alt="" /></section>
        </div>
        </div>
    </div>
  )
}

export default Schedule
