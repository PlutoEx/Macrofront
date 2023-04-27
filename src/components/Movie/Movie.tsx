import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import axios from "axios";
import {CardStyle, ExitButtonStyle, ImgStyle, ModalStyles} from "./Moive.styles";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTimes} from '@fortawesome/free-solid-svg-icons';


const Movie: React.FC<MovieProps> = ({ movieKeys, moviePosterId, isOpen, handleClose }) => {
  const [movieInfo, setMovieInfo] = useState<MovieInfo>({
    title: "Default",
    releaseDate: "Default",
    director: "Default",
    producers: [],
    actors: [],
    description: "Default",
    posterUrl: null,
  });

  useEffect(() => {
    const fetchMovieInfo = async (): Promise<void> => {
      try {
        const response = await axios.get(`http://www.omdbapi.com/?i=tt3896198&apikey=e6f9c46d`); 
        const movieData = response.data;
        setMovieInfo({
          title: movieData.Title,
          releaseDate: movieData.Released,
          director: movieData.Director,
          producers: movieData.Production.split(", "),
          actors: movieData.Actors.split(", "),
          description: movieData.Plot,
          posterUrl: movieData.Poster !== "N/A" ? movieData.Poster : null,
        });
      } catch (error) {
        console.error("My error: " + error);
      }
    };
    fetchMovieInfo().then(r => r);
  }, [movieKeys]);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={handleClose}
      contentLabel={movieInfo.title}
      ariaHideApp={false}
      style={ModalStyles}
    >
      <h2>{movieInfo.title}</h2>
      <div css={CardStyle}>
        {movieInfo.posterUrl && (
          <img
            src={movieInfo.posterUrl}
            alt={`Poster for ${movieInfo.title}`}
            css={ImgStyle}
          />
        )}
        <div>
          <p>Released: {movieInfo.releaseDate}</p>
          <p>Directed by: {movieInfo.director}</p>
          <p>Produced by: {movieInfo.producers.join(", ")}</p>
          <p>Starring: {movieInfo.actors.join(", ")}</p>
          <p>{movieInfo.description}</p>
        </div>
      </div>
      <button onClick={handleClose} css={ExitButtonStyle}>
        <FontAwesomeIcon icon={faTimes} size="2x" color="#ff0000" />
      </button>
    </Modal>
  );
};

export default Movie;
