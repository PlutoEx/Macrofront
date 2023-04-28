import React, {useState} from "react";
import Modal from "react-modal";
import {CardStyle, ExitButtonStyle, ImgStyle, ModalStyles} from "./Moive.styles";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTimes} from '@fortawesome/free-solid-svg-icons';
import {MovieDetails, MovieProps} from "./types";
import {getDetails} from "./getDetails";


const Movie: React.FC<MovieProps> = ({movie_key, isOpen, handleClose}) => {
    const [movie, setMovie] = useState<MovieDetails>({
        genres: [],
        image_url: "",
        minutes: 0,
        release: "",
        type: "",
        id: "Default",
        title: "Default",
        year: 0
    });

    const fetchMovie = async () => {
        try {
            const data: MovieDetails = await getDetails(movie_key);
            setMovie(data);
        } catch (error) {
            console.error(error);
        }
    };

    fetchMovie();

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={handleClose}
            contentLabel={movie.title}
            ariaHideApp={false}
            style={ModalStyles}
        >
            <h2>{movie.title}</h2>
            <div css={CardStyle}>
                <img
                    src={movie.image_url}
                    alt={`Poster for ${movie.title}`}
                    css={ImgStyle}
                />
                <div>
                    <p>Type: {movie.type}</p>
                    {movie.summary && (
                        <p>Summary: {movie.summary}</p>
                    )}
                    {movie.outline && (
                        <p>Outline: {movie.outline}</p>
                    )}
                    {movie.rating && (
                        <p>Rating: {movie.rating}</p>
                    )}
                    {movie.rating_count && (
                        <p>Rating count: {movie.rating_count}</p>
                    )}
                    <p>Genres: {movie.genres.join(', ')}</p>
                    <p>Released: {movie.release}</p>
                    <p>Minutes: {movie.minutes}</p>
                    {movie.episodes && (
                        <p>Episodes: {movie.episodes}</p>
                    )}
                    {movie.series_start && (
                        <p>Series start: {movie.series_start}</p>
                    )}
                    {movie.series_end && (
                        <p>Series end: {movie.series_end}</p>
                    )}
                </div>
            </div>
            <button onClick={handleClose} css={ExitButtonStyle}>
                <FontAwesomeIcon icon={faTimes} size="2x" color="#ff0000"/>
            </button>
        </Modal>
    );
};

export default Movie;
