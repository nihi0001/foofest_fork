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
            <nav className=" flex justify-between bg-Darkblue text-White text-xl px-10 py-4 items-center">
                <ul className="flex gap-2">
                    <li>
                        <Link className={`font-bold ${BowlbyOne.className}`} href={"/"} prefetch={false}>
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
                        <Link className='font-bold text-md' href={"/lineup"} prefetch={false}>
                            LINEUP
                        </Link>
                    </li>
                    <li>
                        <Link className='font-bold text-md' href={"/schedule"} prefetch={false}>
                            SCHEDULE
                        </Link>
                    </li>
                </ul>
            </nav>

            <div className="bg-Hotpink text-White text-md relative flex overflow-x-hidden font-medium">
                <div className="py-2 animate-marquee whitespace-nowrap">
                    <span className="mx-12">FOO FESTIVAL</span>
                    <span className="mx-12 ">JULY 3RD - 7TH 2024</span>
                    <span className="mx-12">FOO FESTIVAL</span>
                    <span className="mx-12">JULY 3RD - 7TH 2024</span>
                    <span className="mx-12">FOO FESTIVAL</span>
                    <span className="mx-12">JULY 3RD - 7TH 2024</span>
                    <span className="mx-12">FOO FESTIVAL</span>
                    <span className="mx-12">JULY 3RD - 7TH 2024</span>




                </div>
{/*
                <div className="absolute top-0 py-2 animate-marquee2 whitespace-nowrap">
                    <span className="text-lg mx-6">FOO FESTIVAL</span>
                    <span className="text-lg mx-6">JULY 3RD - 7TH 2024</span>
                    <span className="text-lg mx-6">FOO FESTIVAL</span>
                    <span className="text-lg mx-6">JULY 3RD - 7TH 2024</span>
                    <span className="text-lg mx-6">FOO FESTIVAL</span>
                    <span className="text-lg mx-6">JULY 3RD - 7TH 2024</span>
                </div>
    */}
            </div>
        </>
    );
}





