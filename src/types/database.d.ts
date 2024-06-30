// Define the User type based on the `users` table schema
export interface User {
    userId: number;
    username: string;
    email: string;
    passwordHash: string;
    avatar?: string;
    bio?: string;
}

// Define the Movie type based on the `movies` table schema
export interface Movie {
    movieId: number;
    posterPath?: string;
    adult: boolean;
    overview?: string;
    releaseDate: string;
    title: string;
    originalTitle: string;
    originalLanguage: string;
    backdropPath?: string;
    popularity?: number;
    voteCount: number;
    voteAverage?: number;
    video: boolean;
}

// Define the Genre type based on the `genres` table schema
export interface Genre {
    genreId: number;
    name: string;
}

// Define the MovieGenre type based on the `movie_genres` table schema
export interface MovieGenre {
    movieId: number;
    genreId: number;
}

// Define the Review type based on the `reviews` table schema
export interface Review {
    reviewId: number;
    movieId: number;
    userId: number;
    content: string;
    rating?: number;
    createdAt: Date;
    updatedAt: Date;
}
