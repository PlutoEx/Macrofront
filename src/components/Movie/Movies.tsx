/** @jsx jsx */
import { jsx } from "@emotion/react";
import React, { useState } from 'react';
import { MoviesGridStyled, UnsetButtonStyled } from "./Moive.styles";
import Movie from "./Movie";
import { MovieDataShort, MoviesProps }  from "./types";
import Card from "../Card";

const Movies: React.FC<MoviesProps> = ({ movies }) => {
  const [selectedMovie, setSelectedMovie] = useState<string | null>(null);
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);

  const handleMovieClick = (movieKey: string) => {
    setSelectedMovie(movieKey);
    setIsOpen(true);
  };

  const handleClose = () : void => {
    setSelectedMovie(null);
    setIsOpen(false);
  };

  return (
    <MoviesGridStyled>
      {movies.map((movie: MovieDataShort, index: number) => (
        <UnsetButtonStyled onClick={() => handleMovieClick(movie.id)} key={index}>
          <Card
            img={movie.image_url}
            alt={`Poster for ${movie.title}`}
            title={movie.title}
            pub_year={movie.year}
          />
        </UnsetButtonStyled>
      ))}
      {selectedMovie && <Movie
        movie_key={selectedMovie}
        isOpen={modalIsOpen}
        handleClose={handleClose}
      />}
    </MoviesGridStyled>
  );
};

export default Movies;
