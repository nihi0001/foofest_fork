import React from 'react'


export default function Footer() {
  return (
    <section className='p-12 bg-Darkblue'>
       


      <div className='max-w-4xl mx-auto grid grid-cols-3'>

      
      <div>
        <h2 className=' text-Hotpink font-medium text-3xl'>LINKS</h2>
       
        <p className='text-lg  text-White'>About Foo Festival</p>
        <p className='text-lg  text-White'>Privacy policy</p>
        <p className='text-lg  text-White'>Terms of use</p>
        <p className='text-lg  text-White'>FAQ</p>
        </div>

        <div>
        <h2 className=' text-White font-medium text-3xl text-center'><span className='text-Hotpink'>© </span>FOO FESTIVAL</h2>
        <p className='text-lg text-White text-center'>KEA - MMD 3. SEM</p>
      
      
    </div>


     <div className='md:ml-40'>
        <h2 className=' text-Hotpink font-medium text-3xl'>CONTACT</h2>
       
        <p className='text-lg  text-White'>info@foofestival.com</p>
        <p className='text-lg  text-White'>+4512345432</p>
        <p className='text-lg text-White'>Festvej 1, 8000 Aarhus </p>
       
    </div>

</div>
     
    </section>
  )
}

