import React from 'react'


export default function Footer() {
  return (
    <section className='p-8 bg-Darkblue'>
        <div className='mb-8'>
            <h2 className='mb-4 text-Hotpink font-medium text-3xl'>Join our newsletter</h2>
            <p className="text-White text-md mb-7 md:text-l md:leading-normal md:w-1/2">Sign up for our newsletter and be among the first to receive news about the line-up, ticket sales, and other exciting things!</p>

    <form action="/" className="">
      <input 
      className="border border-1 rounded-md p-2 bg-input text-base md:w-1/4  sm:w-80"
      type="text"
      /*pattern=""*/
      name="email"
      placeholder="example@gmail.com"
      required/>
      

      <button 
      className=" ml-2 p-2 rounded-xl bg-Hotpink hover:bg-Lightpink text-White mt-3 w-30"
      type="submit" 
      value="check website">
        Send
      </button>
    </form>

        </div>


      <div className='grid grid-cols-2 '>
        <div>
        <h2 className='mb-4 text-Hotpink font-medium text-3xl'>Links</h2>
       
        <p className='text-xl text-White'>About Foo Festival</p>
        <p className='text-xl text-White'>FAQ</p>
        <p className='text-xl text-White'>Privacy policy</p>
        <p className='text-xl text-White'>Terms of use</p>
        </div>


     <div>
        <h2 className='mb-4 text-Hotpink font-medium text-3xl'>Contact</h2>
       
        <p className='text-xl text-White'>info@foofestival.com</p>
        <p className='text-xl text-White'>+4512345432</p>
        <p className='text-xl text-White'>Guldbergsgade 29N, 2200 København</p>
    </div>
</div>
     
    </section>
  )
}

