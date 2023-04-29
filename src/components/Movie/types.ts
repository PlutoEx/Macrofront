export type ApiOptions = {
    method: 'GET';
    url: string;
    params?: {
        genre?: Genres;
        limit?: string;
        tconst?: string;
    };
    headers: any;
};

export type TopMoviesApiOption = ApiOptions & {
    params: {
        genre: Genres;
        limit: string;
    }
}

export type MovieDetailsApiOption = ApiOptions & {
    params: {
        tconst: string;
    };
}


export type MovieDataFull = MovieDetails & MovieCredits

export type MovieCredits = {
    cast: string[];
    director: string[];
    producer?: string[];
    writer?: string[];
}

export type MovieDetails = {
    id: string;
    title: string;
    type: string;
    image_url: string;
    episodes?: number;
    series_start?: number;
    series_end?: number;
    year: number;
    minutes: number;
    rating?: number;
    rating_count?: number;
    genres: string[];
    release: string;
    outline?: string;
    summary?: string;
}

export type MovieDataShort = {
    id: string;
    title: string;
    type: string;
    image_url: string;
    year: number;
}

export type MoviesProps = {
    movies: MovieDataShort[];
    moviesFull?: MovieDataFull[];
}

export type MovieProps = {
    movie_key: string;
    isOpen: boolean;
    handleClose: () => void;
    movieFull?: MovieDataFull;
}

export type Genres = 'all'
    | 'action'
    | 'adventure'
    | 'animation'
    | 'biography'
    | 'comedy'
    | 'crime'
    | 'documentary'
    | 'drama'
    | 'family'
    | 'fantasy'
    | 'film-noir'
    | 'game-show'
    | 'history'
    | 'horror'
    | 'music'
    | 'musical'
    | 'mystery'
    | 'news'
    | 'reality-tv'
    | 'romance'
    | 'sci-fi'
    | 'short'
    | 'sport'
    | 'talk-show'
    | 'thriller'
    | 'war'
    | 'western';
