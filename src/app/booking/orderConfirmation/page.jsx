// order conformation - tak for dit køb
import Link from "next/link"

function page() {
  return (
    <div className="text-White bg-Darkblue p-16 m-20 mt-20 rounded-md border-2 border-Hotpink">
      <h1 className="font-bold text-center text-4xl mb-3">THANK <span className='text-Hotpink'>YOU</span> FOR YOUR ORDER</h1>
      <h2 className="text-center text-xl mb-7">We have sent an order confirmation to your email</h2>
      <div className='flex items-center justify-center'>
      <Link className=" text-center text-Darkblue p-4 mt-8 rounded-3xl bg-Lightpink hover:bg-Hotpink text-white w-80" href={`/`}>
        REDIRECT TO FRONT PAGE</Link>
      </div>
    </div>
  )
}

export default page
