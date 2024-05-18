import Image from "next/image";
import Link from "next/link";
import { Bowlby_One } from "next/font/google";

const BowlbyOne = Bowlby_One({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export default async function Page({ searchParams }) {
  // Fetcher data fra endpoint
  const response = await fetch(`https://yielding-cooperative-tarsal.glitch.me/bands`);
  const data = await response.json();

  // Gruppere bands efter genre
  const groupedByGenre = data.reduce((acc, band) => {
    if (!acc[band.genre]) {
      acc[band.genre] = [];
    }
    acc[band.genre].push(band);
    return acc;
  }, {});

  // Sortere efter alfabetisk rækkefølge
  const sortedGenres = Object.keys(groupedByGenre).sort((a, b) => a.localeCompare(b));

  return (
    <section className="max-w-7xl mx-auto p-4">
      <h1 className={`text-White text-6xl text-center mb-5 p-16 ${BowlbyOne.className}`}>
        LINE UP
      </h1>

      {/* Oversigt over genrene */}
      <div className="mb-8">
        <h2 className="text-Hotpink text-2xl mb-3">Genres:</h2>
        <ul className="flex space-x-4">
          {sortedGenres.map((genre) => (
            <li key={genre}>
              <a href={`#${genre}`} className="text-White hover:underline">{genre}</a>
            </li>
          ))}
        </ul>
      </div>

      {/* Bands opdelt efter genre */}
      {sortedGenres.map((genre) => (
        <div key={genre} id={genre} className="mb-12">
          <h2 className="text-Hotpink text-4xl mb-5 p-4">{genre}</h2>
          <div className="flex overflow-x-auto snap-x snap-mandatory space-x-4">
            {groupedByGenre[genre].map((band) => (
              <div key={band.name} className="snap-center flex-shrink-0 w-80">
                <Link href={`/lineup/${band.slug}`} prefetch={false}>
                  <div className="border-2 border-Hotpink p-2 rounded-sm">
                    <Image
                      alt="Artist presentation"
                      src={`https://yielding-cooperative-tarsal.glitch.me/logos/${band.logo}`}
                      width={350}
                      height={350}
                    />
                    <h2 className="text-White mt-5 text-lg font-light">{band.genre}</h2>
                    <h1 className={`text-Hotpink text-2xl font-medium ${BowlbyOne.className}`}>
                      {band.name}
                    </h1>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}