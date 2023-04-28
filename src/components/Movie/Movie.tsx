import React, {useEffect, useState} from "react";
import Modal from "react-modal";
import {CardStyle, ExitButtonStyled, ImgStyled, ModalStyles, ModalTitle, TextContainer} from "./Moive.styles";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTimes} from '@fortawesome/free-solid-svg-icons';
import {MovieDataFull, MovieProps} from "./types";
import {getDetails} from "./getDetails";


const Movie: React.FC<MovieProps> = ({movie_key, isOpen, handleClose, movieFull}) => {
    const [movie, setMovie] = useState<MovieDataFull>({
        cast: [],
        director: [],
        producer: [],
        genres: [],
        image_url: "",
        minutes: 0,
        release: "",
        type: "",
        id: "Default",
        title: "Default",
        year: 0
    });

    useEffect(() => {
        const fetchMovie = async () => {
            try {
                const data: MovieDataFull = await getDetails(movie_key);
                setMovie(data);
            } catch (error) {
                console.error(error);
            }
        };

        if (movieFull)
            setMovie(movieFull);
        else
            fetchMovie();
    }, [movie_key, movieFull]);

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={handleClose}
            contentLabel={movie.title}
            ariaHideApp={false}
            style={ModalStyles}
        >
            <ModalTitle>{movie.title}</ModalTitle>
            <div css={CardStyle}>
                <ImgStyled
                    src={movie.image_url}
                    alt={`Poster for ${movie.title}`}
                />
                <TextContainer>
                    <p>Type: {movie.type}</p>
                    {movie.summary && (
                        <p>Summary: {movie.summary}</p>
                    )}
                    {movie.outline && (
                        <p>Outline: {movie.outline}</p>
                    )}
                    <p>Released: {movie.release}</p>
                    <p>Cast: {movie.cast.join(', ')}</p>
                    <p>Director: {movie.director.join(', ')}</p>
                    <p>Producer: {movie.producer.join(', ')}</p>
                    {movie.rating && (
                        <p>Rating: {movie.rating}</p>
                    )}
                    {movie.rating_count && (
                        <p>Rating count: {movie.rating_count}</p>
                    )}
                    <p>Genres: {movie.genres.join(', ')}</p>
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
                </TextContainer>
            </div>
            <ExitButtonStyled onClick={handleClose}>
                <FontAwesomeIcon icon={faTimes} size="2x" color="#ff0000"/>
            </ExitButtonStyled>
        </Modal>
    );
};

export default Movie;
