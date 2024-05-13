// forside, landingpage

import ArtistPoster from "./components/ArtistPoster";
import LpBanner from "./components/LpBanner";

export default function Home() {
  return (
    <>
    <LpBanner/>
  

      <ArtistPoster />

      <div className="flex flex-col items-center ">
        <h2 className="text-White text-4xl mb-5">CAMPING AREAS</h2>
        <div className="grid grid-cols-3 gap-4 text-White">
          <section><img src="/dummyImage.jpg" alt="dummy" height={300} width={300}/></section>
          <section><img src="/dummyImage.jpg" alt="dummy" height={300} width={300}/></section>
          <section><img src="/dummyImage.jpg" alt="dummy" height={300} width={300}/></section>
        </div>
      </div>

      <div className="text-center mt-12">      
      <h2 className="text-White text-4xl mb-5">TICKETS</h2>
      </div>

      <div className="max-w-xl mx-auto">
        <details className="border-b mb-6">
          <summary>
            <span className="text-lg text-White">om camping</span>

          </summary>
          <p className="text-White">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum nostrum impedit, quibusdam labore sint corporis neque repellat quisquam cupiditate officia, error hic reiciendis sed dignissimos quas doloribus mollitia. Dolorem, repellat.</p>
        </details>

        <details className="border-b mb-6">
          <summary>
            <span className="text-lg text-White">om camping</span>

          </summary>
          <p className="text-White">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum nostrum impedit, quibusdam labore sint corporis neque repellat quisquam cupiditate officia, error hic reiciendis sed dignissimos quas doloribus mollitia. Dolorem, repellat.</p>
        </details>

        <details className="border-b mb-6">
          <summary>
            <span className="text-lg text-White">om camping</span>

          </summary>
          <p className="text-White">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum nostrum impedit, quibusdam labore sint corporis neque repellat quisquam cupiditate officia, error hic reiciendis sed dignissimos quas doloribus mollitia. Dolorem, repellat.</p>
        </details>
      </div>

    </>
  );
}
