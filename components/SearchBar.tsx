
"use client";

interface SearchBarProps {
  search: string;
  onSearchChange: (value: string) => void;
}

export default function SearchBar({
  search,
  onSearchChange,
}: SearchBarProps) {
  return (
    <div className="relative w-full max-w-md">

      {/* Search Icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="absolute left-4 top-1/2 h-5 w-5
                   -translate-y-1/2 text-gray-400"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.35-4.35" />
      </svg>

      <input
        type="search"
        aria-label="Search movies"
        placeholder="Search movies..."
        value={search}
        onChange={(event) => onSearchChange(event.target.value)}
        className="w-full rounded-lg border border-zinc-700
                   bg-zinc-900 py-3 pl-12 pr-4 text-white
                   outline-none transition-all duration-300
                   placeholder:text-gray-500
                   focus:border-yellow-400
                   focus:ring-2 focus:ring-yellow-400/20"
      />

    </div>
  );
}
