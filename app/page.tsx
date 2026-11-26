"use client";

import { useState } from "react";
import MovieGrid from "../components/MovieGrid";
import SearchBar from "../components/SearchBar";
import type { Movie } from "../components/MovieCard";

const movies: Movie[] = [
  {
    id: 1,
    title: "Interstellar",
    year: "2014",
    poster: "",
    rating: 8.7,
  },
  {
    id: 2,
    title: "Inception",
    year: "2010",
    poster: "",
    rating: 8.8,
  },
  {
    id: 3,
    title: "The Dark Knight",
    year: "2008",
    poster: "",
    rating: 9.0,
  },
  {
    id: 4,
    title: "Dune",
    year: "2021",
    poster: "",
    rating: 8.0,
  },
  {
    id: 5,
    title: "Oppenheimer",
    year: "2023",
    poster: "",
    rating: 8.5,
  },
  {
    id: 6,
    title: "Avatar",
    year: "2009",
    poster: "",
    rating: 7.9,
  },
  {
    id: 7,
    title: "The Batman",
    year: "2022",
    poster: "",
    rating: 7.8,
  },
  {
    id: 8,
    title: "Gladiator",
    year: "2000",
    poster: "",
    rating: 8.5,
  },
  {
    id: 9,
    title: "The Matrix",
    year: "1999",
    poster: "",
    rating: 8.7,
  },
  {
    id: 10,
    title: "Tenet",
    year: "2020",
    poster: "",
    rating: 7.3,
  },
];

export default function Home() {
  const [search, setSearch] = useState("");

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(search.trim().toLowerCase()),
  );

  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      {/* Hero Section */}
      <section
        className="bg-gradient-to-br from-zinc-950
                   via-zinc-900 to-yellow-950
                   px-6 py-24 text-center"
      >
        <h1 className="mb-6 text-4xl font-bold md:text-6xl">
          Welcome to <span className="text-yellow-400">IMR</span>
        </h1>

        <p className="mx-auto mb-8 max-w-3xl text-lg text-gray-400">
          Explore trending movies, discover new releases, and create your
          personal movie collection.
        </p>

        <a
          href="#movies"
          className="inline-block rounded-lg bg-yellow-400
                     px-8 py-4 font-bold text-black
                     transition-all duration-300
                     hover:scale-105 hover:bg-yellow-300"
        >
          Explore Movies
        </a>
      </section>

      {/* Movie Section */}
      <section
        id="movies"
        className="mx-auto max-w-[1600px] scroll-mt-20 px-6 py-14"
      >
        {/* Heading and Search */}
        <div className="mb-8 grid gap-5 md:grid-cols-2 md:items-center">
          <h2 className="text-3xl font-bold">
            {search ? "Search Results" : "Trending Movies"}
          </h2>

          <div className="md:justify-self-end">
            <SearchBar search={search} onSearchChange={setSearch} />
          </div>
        </div>

        {/* Movie Count */}
        <p className="mb-6 text-sm text-gray-400">
          {filteredMovies.length} movies found
        </p>

        {/* Movie Grid */}
        <MovieGrid movies={filteredMovies} />
      </section>
    </main>
  );
}
