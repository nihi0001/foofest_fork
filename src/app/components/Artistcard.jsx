import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Bowlby_One } from 'next/font/google';

const BowlbyOne = Bowlby_One({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
});

export default function LineUp({ searchParams }) {
  const [bands, setBands] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedGenre, setSelectedGenre] = useState('All');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://yielding-cooperative-tarsal.glitch.me/bands`);
        const data = await response.json();
        setBands(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleGenreChange = (event) => {
    setSelectedGenre(event.target.value);
  };

  if (loading) return <p>Loading...</p>;
  if (!bands) return <p>No bands data</p>;

  // Filtrering af bands efter valgt genre
  const filteredBands = selectedGenre === 'All' ? bands : bands.filter((band) => band.genre === selectedGenre);

  // Gruppering af bands efter genre
  const groupedByGenre = bands.reduce((acc, band) => {
    if (!acc[band.genre]) {
      acc[band.genre] = [];
    }
    acc[band.genre].push(band);
    return acc;
  }, {});

  // Sortering af genrer
  const sortedGenres = Object.keys(groupedByGenre).sort((a, b) => a.localeCompare(b));

  return (
    <section className="relative">
      <div className='relative h-1/54 overflow-hidden'>
        <img src="/artists-shorter-BANNER.webp" alt="banner" layout="fill" objectFit="cover"/>

        <div className='absolute inset-0 bg-black opacity-50'></div>
      <h1 className={`text-White text-6xl text-center mb-5 p-16 ${BowlbyOne.className}  absolute inset-0 flex justify-center items-center`}>
        LINE UP
      </h1>
      </div>

      {/* Dropdown for valg af genre */}
      <div className="flex justify-center items-center h-full">
  <div className="m-8">
    <label htmlFor="genre" className="text-Hotpink text-3xl mb-3 mr-4">Choose a genre:</label>
    <select
      id="genre"
      name="genre"
      className="rounded-lg p-2 border-2 border-Hotpink"
      onChange={handleGenreChange}
      value={selectedGenre}
    >
      <option value="All">All genres</option>
      {sortedGenres.map((genre) => (
        <option key={genre} value={genre}>{genre}</option>
      ))}
    </select>
  </div>
</div>

      {/* Bands opdelt efter genre */}
      {filteredBands.length > 0 ? (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center max-w-6xl mx-auto p-6">
      {filteredBands.map((band) => (
        <div key={band.name}>
          <Link href={`/lineup/${band.slug}`} prefetch={false}>
            <div className="border-2 border-Hotpink p-2 rounded-sm cursor-pointer">
              <Image
                alt="Artist presentation"
                src={`https://yielding-cooperative-tarsal.glitch.me/logos/${band.logo}`}
                width={350}
                height={350}
              />
              <p className="text-White mt-5 text-lg font-light">{band.genre}</p>
              <p className={`text-Hotpink text-2xl font-medium ${BowlbyOne.className}`}>
                {band.name}
              </p>
            </div>
          </Link>
        </div>
          ))}
        </div>
      ) : (
        <p className="text-White">No bands found for the selected genre.</p>
      )}
    </section>
  );
}
