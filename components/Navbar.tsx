import Link from "next/link";

export default function Navbar() {
  return (
    <header className="bg-black border-b border-zinc-800">
      <nav className="max-w-7xl mx-auto px-6 py-5 grid grid-cols-2 md:grid-cols-3 items-center">
        <Link href="/" className="text-3xl font-bold text-yellow-400">
          IMX<span className="text-white">Movies</span>
        </Link>

        <div className="hidden md:grid grid-flow-col gap-6 text-gray-300">
          <Link href="/" className="hover:text-yellow-400">
            Home
          </Link>

          <Link href="/movies" className="hover:text-yellow-400">
            Movies
          </Link>

          <Link href="/favorites" className="hover:text-yellow-400">
            Favorites
          </Link>

          <Link href="/about" className="hover:text-yellow-400">
            About
          </Link>
        </div>

        <div className="justify-self-end">
          <Link
            href="/login"
            className="bg-yellow-400 text-black px-5 py-2 rounded-lg font-semibold hover:bg-yellow-500"
          >
            Sign In
          </Link>
        </div>
      </nav>
    </header>
  );
}
