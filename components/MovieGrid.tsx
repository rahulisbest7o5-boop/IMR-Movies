
import MovieCard from "./MovieCard";
import type { Movie } from "./MovieCard";

interface MovieGridProps {
  movies: Movie[];
}

export default function MovieGrid({ movies }: MovieGridProps) {
  if (movies.length === 0) {
    return (
      <div className="py-20 text-center text-gray-400">
        No movies found.
      </div>
    );
  }

  return (
    <div
      className="grid grid-cols-2 gap-6
                 sm:grid-cols-3
                 lg:grid-cols-4
                 xl:grid-cols-5"
    >
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}
