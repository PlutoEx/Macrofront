import React from 'react';
import Header from "./Header";
import TopMovies from "./TopMovies";
import MovieSearch from "./MovieSearch";

const Main = () => {
    return (
        <div>
            <TopMovies/>
            <MovieSearch/>
        </div>
    );
};

export default Main;
