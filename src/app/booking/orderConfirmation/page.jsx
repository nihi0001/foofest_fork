// order conformation - tak for dit køb
import Link from "next/link"
import { Bowlby_One } from "next/font/google";

const BowlbyOne = Bowlby_One({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

function page() {
  return (
    <section>
    <div className="text-White bg-Darkblue p-6 md:p-16 m-20 rounded-md border-2 border-Hotpink">
    
      <h1 className={`font-bold text-center mb-3 text-2xl md:text-4xl ${BowlbyOne.className}`}>THANK <span className='text-Hotpink'>YOU</span> FOR YOUR ORDER</h1>
      <h2 className="text-lg text-center md:text-xl mb-7">We have sent an order confirmation along with your tickets to your email!</h2>
      <div className='flex items-center justify-center'>
      <Link className=" text-sm md:text-lg text-center text-White p-4 mt-8 rounded-2xl bg-Hotpink hover:bg-Lightpink text-white max-w-auto" href={`/`}>
        REDIRECT TO FRONT PAGE</Link>
      </div>
    </div>
    </section>
  )
}

export default page
