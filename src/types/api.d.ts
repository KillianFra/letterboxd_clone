// Interface for the collection a movie belongs to
interface Collection {
    id: number;
    name: string;
    poster_path: string;
    backdrop_path: string;
}

// Interface for each genre of the movie
interface Genre {
    id: number;
    name: string;
}

// Interface for production companies associated with the movie
interface ProductionCompany {
    id: number;
    logo_path: string;
    name: string;
    origin_country: string;
}

// Interface for production countries associated with the movie
interface ProductionCountry {
    iso_3166_1: string;
    name: string;
}

// Interface for spoken languages in the movie
interface SpokenLanguage {
    english_name: string;
    iso_639_1: string;
    name: string;
}

// Interface for the movie data
interface MovieData {
    adult: boolean;
    backdrop_path: string;
    belongs_to_collection?: Collection;
    budget: number;
    genres: Genre[];
    homepage: string;
    id: number;
    imdb_id?: string;
    origin_country: string[];
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    production_companies: ProductionCompany[];
    production_countries: ProductionCountry[];
    release_date: string;
    revenue: number;
    runtime: number;
    spoken_languages: SpokenLanguage[];
    status: string;
    tagline: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}