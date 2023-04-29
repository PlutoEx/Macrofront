import React, { useState } from 'react';
import {ApiOptions, Genres, MovieDataFull, TopMoviesApiOption} from "./types";
import {getDetails} from "./getDetails";
import {
    SelectGenreStyled, SelectTextStyled, TopMoviesWrapperStyled,
} from "./Moive.styles";
import SelectMenu from "../SelectMenu/selectMenu";
import {Option} from "../SelectMenu/types";
import {genresOptions, top1, top2, top3, top4, top5, top6, top7, top8, top9, top10} from './constant';
import Movies from "./Movies";

const MaxMovieCount = 10;
const axios = require('axios');
const options_all: ApiOptions = {
    method: 'GET',
    url: 'https://imdb8.p.rapidapi.com/title/get-most-popular-movies',
    headers: {
        'content-type': 'application/octet-stream',
        'X-RapidAPI-Key': '6790fd4e5fmshda4defe8241f205p1c78d8jsn6dd8a422c590',
        'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
    }
}
const options_genre: TopMoviesApiOption = {
    method: 'GET',
    url: 'https://imdb8.p.rapidapi.com/title/v2/get-popular-movies-by-genre',
    params: {
        genre: 'all',
        limit: MaxMovieCount.toString()
    },
    headers: {
        'content-type': 'application/octet-stream',
        'X-RapidAPI-Key': '6790fd4e5fmshda4defe8241f205p1c78d8jsn6dd8a422c590',
        'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
    }
};

const TopMovies = () => {
    const [_genre, setGenre] = useState<string | null>(null);
    const handleGet = async (): Promise<string[]> => {
        try {
            let response;
            if (options_genre.params?.genre == 'all')
                response = await axios.request(options_all);
            else
                response = await axios.request(options_genre);
            response.data = response.data.slice(0, MaxMovieCount);
            return (response.data.map((a: string) => a.substring(7, a.length - 1)))
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    const [movies, setMovies] = useState<MovieDataFull[]>([top1, top2, top3, top4, top5, top6, top7, top8, top9, top10]);

    const fetchMovies = async () => {
        try {
            const movies_keys: string[] = await handleGet();
            const movies_tmp: MovieDataFull[] = [];
            for (const key of movies_keys) {
                const data: MovieDataFull = await getDetails(key);
                movies_tmp.push(data);
            }
            setMovies(movies_tmp);
        } catch (error) {
            console.error(error);
        }
    };

    const handleGenreChange = (option: Option): void => {
        const selectedGenre: Genres = option.value as Genres;
        setGenre(selectedGenre);
        options_genre.params.genre = selectedGenre;
        fetchMovies();
    };

    return (
        <TopMoviesWrapperStyled>
            <SelectGenreStyled>
                <SelectTextStyled>
                    Trending films by genre:
                </SelectTextStyled>
                <SelectMenu
                    options={genresOptions}
                    onChange={handleGenreChange}
                />
            </SelectGenreStyled>
            <Movies
                movies={movies}
                moviesFull={movies}
            />
        </TopMoviesWrapperStyled>
    );
};

export default TopMovies;