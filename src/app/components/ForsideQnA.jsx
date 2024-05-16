import React from 'react'
import { Bowlby_One } from "next/font/google";

const BowlbyOne = Bowlby_One({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

function ForsideQnA() {
  return (
    <div>
          <div className="max-w-3xl mx-auto">
        <h2 className={`text-White text-5xl mb-12 text-center ${BowlbyOne.className}`}>Q&A</h2>
        <details className="border-b mb-6 border-Hotpink">
          <summary style={{ color: 'Hotpink' }}>
            <span className="text-2xl text-White">How can I apply to become a volunteer?</span>

          </summary>
          <p className="text-White text-lg mt-5 mb-4 max-w-2xl">You can sign up as a volunteer at Foo Festival in two ways:</p>
          <p className="text-White text-lg max-w-2xl mb-4 ">Find a volunteer role that interests you and apply by sending an email to the contact person listed at the bottom of each volunteer posting. You can discover even more exciting volunteer opportunities by joining the Facebook group Foo Festival Become a Volunteer.</p>
          <p className="text-White text-lg mb-5 max-w-2xl">You also have the option to sign up individually or as a group of friends, then we will find a volunteer role that suits you/your group.</p>
        </details>

        <details className="border-b mb-6 border-Hotpink">
          <summary style={{ color: 'Hotpink' }}>
            <span className="text-2xl text-White">How can I easily arrive at Foo Festival?</span>

          </summary>
          <p className="text-White text-lg mt-5 mb-5 max-w-2xl">If you want to peacefully arrive at the venue a few hours before the opening and avoid standing in hour-long queues, you once again have the opportunity this year to purchase Early Entry access to Camping East, Camping South, Camping West, Caravan North, and Caravan South. You can also buy an Early Entry ticket, which includes a train ticket from Roskilde St. to Roskilde Festival Station in West or a bus ticket.</p>
        </details>

        <details className="border-b mb-6 border-Hotpink">
          <summary style={{ color: 'Hotpink' }}>
            <span className="text-2xl text-White">What are the options for camping at Foo Festival?</span>

          </summary>
          <p className="text-White mt-5 mb-5 max-w-2xl text-lg">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum nostrum impedit, quibusdam labore sint corporis neque repellat quisquam cupiditate officia, error hic reiciendis sed dignissimos quas doloribus mollitia. Dolorem, repellat.</p>
        </details>
      </div>
    </div>
  )
}

export default ForsideQnA
