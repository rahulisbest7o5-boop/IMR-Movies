import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-zinc-950 text-white">
      {/* Hero Section */}
      <section className="min-h-[500px] grid place-items-center bg-gradient-to-br from-black via-zinc-900 to-yellow-950 px-6">
        <div className="text-center max-w-3xl">
          <p className="text-yellow-400 uppercase tracking-widest mb-4">
            Welcome to IMX Movies
          </p>

          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Discover Your Next
            <span className="text-yellow-400"> Favorite Movie</span>
          </h1>

          <p className="text-gray-400 text-lg mb-8">
            Explore trending movies, discover new releases, and create your
            personal movie collection.
          </p>

          <Link
            href="/movies"
            className="inline-block bg-yellow-400 text-black px-8 py-3 rounded-lg font-bold hover:bg-yellow-500"
          >
            Explore Movies
          </Link>
        </div>
      </section>

      {/* Trending Movies */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold mb-8">Trending Movies</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {Array.from({ length: 5 }, (_, index) => (
            <div
              key={index}
              className="bg-zinc-900 rounded-xl overflow-hidden border border-zinc-800"
            >
              <div className="aspect-[2/3] bg-zinc-800 grid place-items-center text-gray-500">
                Movie Poster
              </div>

              <div className="p-4">
                <h3 className="font-semibold">Movie Title</h3>

                <p className="text-gray-400 text-sm">Release Year</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
