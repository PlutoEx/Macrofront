/** @jsx jsx */
import { jsx } from '@emotion/react';
import React, { useState } from 'react';
import {
  ContainerStyled,
  FormStyled,
  LeftSideStyled,
  RightSideStyled,
  TextGenresStyled,
  TextSearchStyled,
} from './Moive.styles';
import Input from '../Input';
import Movies from './Movies';
import { genresOptions } from './constant';
import { MovieDataShort } from './types';
import SelectSomeMenu from '../SelectMenu/SelectSomeMenu';

const MaxMoviesSize: number = 9;

const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://imdb8.p.rapidapi.com/title/v2/find',
  params: {
    title: 'game of',
    limit: MaxMoviesSize.toString(),
    genre: '',
  },
  headers: {
    'content-type': 'application/octet-stream',
    'X-RapidAPI-Key': '6790fd4e5fmshda4defe8241f205p1c78d8jsn6dd8a422c590',
    'X-RapidAPI-Host': 'imdb8.p.rapidapi.com',
  },
};

const MovieSearch: React.FC = () => {
  const [_inputValue, setInputValue]: [string, React.Dispatch<string>] = useState<string>('');
  const [movies, setMovies] = useState<MovieDataShort[]>([]);
  const [genres, setGenres] = useState<string[]>(['all']);

  const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.request(options);
      console.log('Search titleS API:');
      console.log(response.data);
      const movieResults: MovieDataShort[] = response.data.results.map((movie: any) => ({
        key: movie.id,
        id: movie.id.substring(7, movie.id.length - 1),
        title: movie.title,
        type: movie.titleType,
        year: movie.year,
        image_url: movie.image ? movie.image.url : 'no image',
      }));
      setMovies(movieResults);
    } catch (error) {
      console.error('My error: ' + error);
    }
  };

  const handleInputChange = (event: string): void => {
    const newValue: string = event.toString().toLowerCase();
    options.params.title = newValue;
    setInputValue(newValue);
  };

  const handleGenresChange = (active: string[]): void => {
    setGenres(active);
    if (active[0] == 'all') options.params.genre = '';
    else options.params.genre = active.join(',');
  };

  return (
    <ContainerStyled>
      <LeftSideStyled>
        <FormStyled onSubmit={handleSearch} id="search-form">
          <TextSearchStyled>Search</TextSearchStyled>
          <Input type="text" placeholder={'Enter title or keyword'} onChange={handleInputChange} />
        </FormStyled>
        <div>
          <TextGenresStyled>Genres</TextGenresStyled>
          <SelectSomeMenu options={genresOptions} active={genres} onChange={handleGenresChange} />
        </div>
      </LeftSideStyled>
      <RightSideStyled>
        <Movies movies={movies} />
      </RightSideStyled>
    </ContainerStyled>
  );
};

export default MovieSearch;
