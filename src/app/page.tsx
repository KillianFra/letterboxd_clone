"use client"
import {fetchMovies} from "~/server/utils/AddMovieDb";
export default function HomePage() {
  return (
    <button className="w-10 h-10 bg-red-700" onClick={fetchMovies}></button>
  );
}
