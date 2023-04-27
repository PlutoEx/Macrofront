/** @jsx jsx */
import { jsx } from "@emotion/react";
import React, { useState } from 'react';
import { MoviesGridStyled, unsetButton } from "./Moive.styles";
import Movie from "./Movie";
import { MovieData, MoviesProps }  from "./types";
import Card from "../Card";

const Movies: React.FC<MoviesProps> = ({ movies }) => {
  const [selectedMovie, setSelectedMovie] = useState<string[] | null>(null);
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);
  const [moviePosterId, setMoviePosterId] = useState<number | null>(null);

  const handleMovieClick = (movieKey: string[], moviePosterId: number) => {
    setSelectedMovie(movieKey);
    setMoviePosterId(moviePosterId);
    setIsOpen(true);
  };

  const handleClose = () => {
    setSelectedMovie(null);
    setMoviePosterId(null);
    setIsOpen(false);
  };

  return (
    <MoviesGridStyled>
      {movies.map((movie: MovieData) => (
        <button css={unsetButton} onClick={() => handleMovieClick([movie.id], movie.poster_path)}>
          <Card
            img={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt={`Poster for ${movie.title}`}
            title={movie.title}
          />
        </button>
      ))}
      {selectedMovie && moviePosterId && <Movie
        movieKeys={selectedMovie}
        moviePosterId={moviePosterId}
        isOpen={modalIsOpen}
        handleClose={handleClose}
      />}
    </MoviesGridStyled>
  );
};

export default Movies;
