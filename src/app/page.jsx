// forside, landingpage

import ArtistPoster from "./components/ArtistPoster";
import LpBanner from "./components/LpBanner";
import { Bowlby_One } from "next/font/google";

const BowlbyOne = Bowlby_One({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export default function Home() {
  return (
    <>
      <LpBanner />


      <ArtistPoster />

      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col items-center ">
          <h2 className={`text-White text-4xl mb-5 ${BowlbyOne.className}`}>CAMPING AREAS</h2>

          <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-9  text-White">

            <div className="bg-Hotpink rounded-xl hover:bg-Lightpink transition duration-300 ">
              <img src="/dummyImage.jpg" alt="dummy" className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2 text-Navyblue">Friday and Saturday are sold out!</h3>
                <p className="text-sm">All single-day tickets for Friday and Saturday at FOO FESTIVAL 2024 are gone. We expect a fully sold-out festival, so buy your ticket in time.</p>
              </div>
            </div>

            <div className="bg-Hotpink rounded-xl  hover:bg-Lightpink transition duration-300 ">
              <img src="/dummyImage.jpg" alt="dummy" className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2 text-Navyblue">Get guided through the music</h3>
                <p className="text-sm">FOO Festival 2024 presents 186 music acts! Dreaming of getting to know some of the many gems before you arrive at the festival? Then this is your guide.</p>
              </div>
            </div>

            <div className="bg-Hotpink rounded-xl  hover:bg-Lightpink transition duration-300 ">
              <img src="/dummyImage.jpg" alt="dummy" className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2 text-Navyblue">The schedule is ready!</h3>
                <p className="text-sm">Now you can truly plan FOO Festival 2024 down to the details. Today, we present the completed schedule.</p>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="text-center mt-12">
        <h2 className={`text-White text-4xl mb-5 ${BowlbyOne.className}`}>TICKETS</h2>
      </div>

      <div className="max-w-2xl mx-auto">
        <h2 className={`text-White text-4xl mb-8 text-center ${BowlbyOne.className}`}>Q&A</h2>
        <details className="border-b mb-6 border-Hotpink">
          <summary style={{ color: 'Hotpink' }}>
            <span className="text-2xl text-White">How can I apply to become a volunteer?</span>

          </summary>
          <p className="text-White mt-5">You can sign up as a volunteer at Foo Festival in two ways:</p>
          <p className="text-White">Find a volunteer role that interests you and apply by sending an email to the contact person listed at the bottom of each volunteer posting. You can discover even more exciting volunteer opportunities by joining the Facebook group Foo Festival Become a Volunteer.</p>
          <p className="text-White mb-5">You also have the option to sign up individually or as a group of friends, then we will find a volunteer role that suits you/your group.</p>
        </details>

        <details className="border-b mb-6 border-Hotpink">
          <summary style={{ color: 'Hotpink' }}>
            <span className="text-2xl text-White">How can I easily arrive at Foo Festival?</span>

          </summary>
          <p className="text-White mt-5 mb-5">If you want to peacefully arrive at the venue a few hours before the opening and avoid standing in hour-long queues, you once again have the opportunity this year to purchase Early Entry access to Camping East, Camping South, Camping West, Caravan North, and Caravan South. You can also buy an Early Entry ticket, which includes a train ticket from Roskilde St. to Roskilde Festival Station in West or a bus ticket.</p>
        </details>

        <details className="border-b mb-6 border-Hotpink">
          <summary style={{ color: 'Hotpink' }}>
            <span className="text-2xl text-White">What are the options for camping at Foo Festival?</span>

          </summary>
          <p className="text-White mt-5 mb-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum nostrum impedit, quibusdam labore sint corporis neque repellat quisquam cupiditate officia, error hic reiciendis sed dignissimos quas doloribus mollitia. Dolorem, repellat.</p>
        </details>
      </div>
    </>
  );
}
