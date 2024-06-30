import {db} from "~/server/db";
import {movies} from "~/server/db/schema";
import {postMovie} from "~/server/utils/postMovie";
type Movie = typeof movies.$inferInsert;

export async function fetchMovies() {
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNDU4NTBjM2VjMDNjYjAwZmRiOTQxZTZlMWIyMzkxNSIsIm5iZiI6MTcxOTQzMDg5Mi45Nzk0MDIsInN1YiI6IjY0ODcyZDZkZTM3NWMwMDEzOWMxNGNlMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Bh6wUIxS_pblbuvCsikKxbX_ZB6Btg0Pe2fxFy-TSRU'
        }
    };

    const response = await fetch('https://api.themoviedb.org/3/movie/1022789?language=en-US', options);
    const data: MovieData = await response.json() as MovieData;
    console.log(data)
    const fetchedFilm: Movie = {
        adult: data.adult,
        backdropPath: data.backdrop_path,
        movieId: data.id,
        originalLanguage: data.original_language,
        originalTitle: data.original_title,
        overview: data.overview,
        popularity: data.popularity,
        posterPath: data.poster_path,
        releaseDate: data.release_date,
        title: data.title,
        video: data.video,
        voteAverage: 0,
        voteCount: 0,
    };
    console.log(fetchedFilm);
    await postMovie(fetchedFilm)
    return fetchedFilm; // Return the film object
}