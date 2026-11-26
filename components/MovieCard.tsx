
export interface Movie {
  id: number;
  title: string;
  year: string;
  poster: string;
  rating: number;
}

interface MovieCardProps {
  movie: Movie;
}

export default function MovieCard({ movie }: MovieCardProps) {
  return (
    <div
      className="group relative cursor-pointer overflow-hidden
                 rounded-xl border border-zinc-800 bg-zinc-900
                 transition-all duration-300 ease-out
                 hover:z-10 hover:-translate-y-2 hover:scale-105
                 hover:border-yellow-400 hover:shadow-xl
                 hover:shadow-yellow-500/20"
    >
      {/* Movie Poster */}
      <div className="relative aspect-[2/3] overflow-hidden bg-zinc-800">

        {movie.poster ? (
          <img
            src={movie.poster}
            alt={movie.title}
            className="h-full w-full object-cover transition-transform
                       duration-500 group-hover:scale-110"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-gray-500">
            Movie Poster
          </div>
        )}

        {/* Hover Overlay */}
        <div
          className="absolute inset-0 flex items-center justify-center
                     bg-black/60 opacity-0 transition-opacity
                     duration-300 group-hover:opacity-100"
        >
          <span
            className="translate-y-4 rounded-lg bg-yellow-400
                       px-5 py-3 font-bold text-black
                       transition-transform duration-300
                       group-hover:translate-y-0"
          >
            View Details
          </span>
        </div>

      </div>

      {/* Movie Information */}
      <div className="p-4">
        <h3 className="truncate text-lg font-semibold group-hover:text-yellow-400">
          {movie.title}
        </h3>

        <p className="mt-1 text-sm text-gray-400">
          {movie.year}
        </p>

        <div className="mt-3 flex items-center gap-2">
          <span className="text-yellow-400">★</span>
          <span className="text-sm text-gray-300">
            {movie.rating}/10
          </span>
        </div>
      </div>
    </div>
  );
}
