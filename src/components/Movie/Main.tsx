import React from 'react';
import Header from "./Header";
import TopMovies from "./TopMovies";
import MovieSearch from "./MovieSearch";

document.title = 'Movie';

const Main = () => {
    return (
        <div>
            <meta name="description" content="Movie search page" />
            <Header/>
            <TopMovies/>
            <MovieSearch/>
        </div>
    );
};

export default Main;
