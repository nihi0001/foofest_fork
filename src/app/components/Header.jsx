import Link from 'next/link'
import { Bowlby_One } from "next/font/google";
 
const BowlbyOne = Bowlby_One({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export default async function Header() {
    const res = await fetch(`https://yielding-cooperative-tarsal.glitch.me/`);
    const dogs = await res.json();

    return (
        <>
              <div className="bg-Hotpink py-2">
                <p className="text-md text-White text-center font-normal tracking-wider">Camping Spots Still Available - Reserve Yours Today!</p>
            </div>

            <nav className=" flex justify-between bg-Darkblue text-White px-10 py-2 items-center">
                <ul className="flex gap-2">
                    <li>
                        <Link className={`font-bold text-2xl ${BowlbyOne.className}`} href={"/"} prefetch={false}>
                            FOOFEST
                        </Link>
                    </li>
                </ul>

                <ul className='flex items-center gap-10'>
                    <li>
                       {/* <Link href={"/booking"} prefetch={false} className='bg-Hotpink font-semibold text-Darkblue p-2 rounded-full text-md' >*/} 
                           <Link href={"/booking"} prefetch={false} > <img src="/ticket.png" alt="ticket" width={60} height={60} />
                        </Link>
                    </li>
                    <li>
                        <Link className='font-bold text-mg' href={"/lineup"} prefetch={false}>
                            LINEUP
                        </Link>
                    </li>
                    <li>
                        <Link className='font-bold text-mg' href={"/schedule"} prefetch={false}>
                            SCHEDULE
                        </Link>
                    </li>
                </ul>
            </nav>

         
        </>
    );
}





