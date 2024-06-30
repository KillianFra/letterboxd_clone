import { sql } from "drizzle-orm";
import {
    index,
    integer,
    pgTable,
    serial,
    varchar,
    text,
    date,
    boolean,
    timestamp,
    primaryKey, real,
} from "drizzle-orm/pg-core";

// Table des utilisateurs
export const users = pgTable(
    "users",
    {
        userId: serial("user_id").primaryKey(),
        username: varchar("username", { length: 255 }).notNull(),
        email: varchar("email", { length: 255 }).notNull(),
        passwordHash: varchar("password_hash", { length: 255 }).notNull(),
        avatar: varchar("avatar", { length: 255 }),
        bio: text("bio"),
    },
    (users) => ({
        usernameIndex: index("username_idx").on(users.username),
        emailIndex: index("email_idx").on(users.email),
    })
);

// Table des films
export const movies = pgTable(
    "movies",
    {
        movieId: serial("movie_id").primaryKey(),
        posterPath: varchar("poster_path", { length: 255 }),
        adult: boolean("adult").notNull(),
        overview: text("overview"),
        releaseDate: date("release_date").notNull(),
        title: varchar("title", { length: 255 }).notNull(),
        originalTitle: varchar("original_title", { length: 255 }).notNull(),
        originalLanguage: varchar("original_language", { length: 10 }).notNull(),
        backdropPath: varchar("backdrop_path", { length: 255 }),
        popularity: real("popularity"),
        voteCount: integer("vote_count").notNull(),
        voteAverage: real("voteAverage"),
        video: boolean("video").notNull(),
    },
    (movies) => ({
        titleIndex: index("title_idx").on(movies.title),
    })
);

// Table des genres
export const genres = pgTable(
    "genres",
    {
        genreId: serial("genre_id").primaryKey(),
        name: varchar("name", { length: 255 }).notNull(),
    },
    (genres) => ({
        nameIndex: index("name_idx").on(genres.name),
    })
);

// Table de liaison entre les films et les genres (N:M)
export const movieGenres = pgTable(
    "movie_genres",
    {
        movieId: integer("movie_id").references(() => movies.movieId).notNull(),
        genreId: integer("genre_id").references(() => genres.genreId).notNull(),
    },
    (movieGenres) => ({
        pk: primaryKey(movieGenres.movieId, movieGenres.genreId),
    })
);

// Table des critiques des films
export const reviews = pgTable(
    "reviews",
    {
        reviewId: serial("review_id").primaryKey(),
        movieId: integer("movie_id").references(() => movies.movieId).notNull(),
        userId: integer("user_id").references(() => users.userId).notNull(),
        content: text("content").notNull(),
        rating: real("rating"),
        createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
        updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow().notNull(),
    }
);

