"use server"

import {db} from "~/server/db";
import {movies} from "~/server/db/schema";
type Movie = typeof movies.$inferInsert;

export async function postMovie(movie: Movie) {
    "use server"
    await db.insert(movies).values(movie);
}