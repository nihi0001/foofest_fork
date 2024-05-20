import React from 'react'

function Nyhedsbrev() {
  return (
    <div className='p-4'>
        <div className='max-w-3xl mx-auto mb-20'>
            <p className='text-Hotpink text-3xl mb-5 font-semibold'>Join our newsletter</p>
            <p className='text-White max-w-xl text-lg font-normal mb-5'>Dont miss out on exclusive Foo Festival updates! Sign up for our newsletter and be among the first to receive news about the line-up, ticket sales, and other exciting things</p>
            <input type="email" placeholder='email' id="email" pattern=".+@example\.com" size="20" className='p-1.5 rounded-md text-lg' />
            <button className='bg-Hotpink p-1.5 w-20 text-lg rounded-md ml-3 text-White'>SEND</button>
        </div>
      
    </div>
  )
}

export default Nyhedsbrev
