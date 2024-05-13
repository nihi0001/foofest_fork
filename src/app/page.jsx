// forside, landingpage

import ArtistPoster from "./components/ArtistPoster";

export default function Home() {
  return (
    <>
      <div className="h-screen flex justify-center items-center ">
        <div className="text-center">
          <h1 className="text-White text-8xl">FOO FESTIVAL</h1>
          <p className="text-White text-6xl">2024</p>
        </div>
      </div>

      <ArtistPoster />

      <div className="flex flex-col items-center ">
        <h2 className="text-White text-4xl mb-5">CAMPING AREAS</h2>
        <div className="grid grid-cols-3 gap-4 text-White">
          <section>img 1</section>
          <section>img 2</section>
          <section>img 3</section>
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
