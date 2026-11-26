import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-zinc-950 via-zinc-900 to-yellow-950 px-6 py-24 text-center">
        <h1 className="mb-6 text-4xl font-bold md:text-6xl">
          Welcome to <span className="text-yellow-400">IMX</span>
        </h1>

        <p className="mx-auto mb-8 max-w-3xl text-lg text-gray-400">
          Explore trending movies, discover new releases, and create your
          personal movie collection.
        </p>

        <Link
          href="#trending"
          className="inline-block rounded-lg bg-yellow-400 px-8 py-4
                     font-bold text-black transition-all duration-300
                     hover:scale-105 hover:bg-yellow-300"
        >
          Explore Movies
        </Link>
      </section>
      <section
        id="trending"
        className="mx-auto max-w-[1600px] scroll-mt-20 px-6 py-14"
      >
        <h2 className="mb-8 text-3xl font-bold">Trending Movies</h2>

        <div
          className="grid grid-cols-2 gap-6 sm:grid-cols-3
                        lg:grid-cols-4 xl:grid-cols-5"
        >
          {Array.from({ length: 10 }, (_, index) => (
            /* Movie Card */
            <div
              key={index}
              tabIndex={0}
              className="group relative cursor-pointer overflow-hidden
                         rounded-xl border border-zinc-800 bg-zinc-900
                         transition-all duration-300 ease-out
                         hover:z-10 hover:-translate-y-2 hover:scale-105
                         hover:border-yellow-400 hover:shadow-xl
                         hover:shadow-yellow-500/20
                         focus-visible:border-yellow-400"
            >

              <div
                className="relative flex aspect-[2/3] items-center
                              justify-center overflow-hidden bg-zinc-800"
              >
                <span
                  className="text-gray-500 transition-transform
                                 duration-300 group-hover:scale-110"
                >
                  Movie Poster
                </span>
                <div
                  className="absolute inset-0 flex items-center
                                justify-center bg-black/60 opacity-0
                                transition-opacity duration-300
                                group-hover:opacity-100
                                group-focus:opacity-100"
                >
                  <span
                    className="translate-y-4 rounded-lg bg-yellow-400
                                   px-5 py-3 font-bold text-black
                                   transition-transform duration-300
                                   group-hover:translate-y-0
                                   group-focus:translate-y-0"
                  >
                    View Details
                  </span>
                </div>
              </div>
              <div className="p-4">
                <h3
                  className="text-lg font-semibold transition-colors
                               duration-300 group-hover:text-yellow-400"
                >
                  Movie Title
                </h3>

                <p className="mt-1 text-sm text-gray-400">Release Year</p>

                {/* Rating */}
                <div className="mt-3 flex items-center gap-2">
                  <span className="text-yellow-400">★</span>
                  <span className="text-sm text-gray-300">N/A</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
