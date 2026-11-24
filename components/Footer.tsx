import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-zinc-800 text-gray-400">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h2 className="text-2xl font-bold text-yellow-400">
            IMX<span className="text-white">Movies</span>
          </h2>

          <p className="mt-3">
            Discover movies, explore new releases, and find your next favorite
            film.
          </p>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>

          <div className="grid gap-2">
            <Link href="/">Home</Link>
            <Link href="/movies">Movies</Link>
            <Link href="/favorites">Favorites</Link>
            <Link href="/about">About</Link>
          </div>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">Support</h3>

          <div className="grid gap-2">
            <Link href="/contact">Contact Us</Link>
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>

      <div className="border-t border-zinc-800 text-center py-5 text-sm">
        © {new Date().getFullYear()} IMX Movies. All rights reserved.
      </div>
    </footer>
  );
}
