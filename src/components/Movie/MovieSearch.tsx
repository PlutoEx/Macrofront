/** @jsx jsx */
import {jsx} from "@emotion/react";
import React, {useState} from "react";
import {ContainerStyled, SearchStyle, TextStyle} from "./Moive.styles";
import Input from "../Input";
import Movies from "./Movies";
import {genresOptions} from "./constant";
import {MovieDataShort} from "./types";
import SelectSomeMenu from "../SelectMenu/SelectSomeMenu";

const MaxMoviesSize: number = 9;

const axios = require('axios');

const options = {
    method: 'GET',
    url: 'https://imdb8.p.rapidapi.com/title/v2/find',
    params: {
        title: 'game of',
        limit: MaxMoviesSize.toString(),
        genre: ''
    },
    headers: {
        'content-type': 'application/octet-stream',
        'X-RapidAPI-Key': '720535f9edmshf844121d0df7abdp1a3953jsn11d730052c80',
        'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
    }
};

const MovieSearch: React.FC = () => {
    const [_inputValue, setInputValue]: [string, React.Dispatch<string>] = useState<string>("");
    const [movies, setMovies] = useState<MovieDataShort[]>([]);
    const [genres, setGenres] = useState<string[]>(['all']);

    const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await axios.request(options);
            console.log('Search titleS API:');
            console.log(response.data);
            const movieResults: MovieDataShort[] = response.data.results.map((movie: any) => ({
                id: movie.id.substring(7, movie.id.length - 1),
                title: movie.title,
                type: movie.titleType,
                year: movie.year,
                image_url: movie.image.url,
            }));
            setMovies(movieResults);
        } catch (error) {
            console.error("My error: " + error);
        }
    };

    const handleInputChange = (event: string): void => {
        const newValue: string = event.toString().toLowerCase();
        options.params.title = newValue;
        setInputValue(newValue);
    };

    const handleGenresChange = (active: string[]): void => {
        setGenres(active);
        if (active[0] == 'all')
            options.params.genre = ''
        else
            options.params.genre = active.join(',');
    }

    return (
        <ContainerStyled>
            <form onSubmit={handleSearch} id="search-form">
                <div css={SearchStyle}>
                    <div>
                        <div css={TextStyle}>Search</div>
                        <Input
                            type="text"
                            placeholder={"Enter title or keyword"}
                            onChange={handleInputChange}
                        />
                    </div>
                </div>
            </form>
            <div>
                <div css={TextStyle}>Genres</div>
                <SelectSomeMenu
                    options={genresOptions}
                    active={genres}
                    onChange={handleGenresChange}
                />
            </div>
            <Movies movies={movies}/>
        </ContainerStyled>
    );
};

export default MovieSearch;
