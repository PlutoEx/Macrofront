import React from 'react';
import Header from "./Header";
import BooksSearch from "./BooksSearch";
import UniversalHeader from "./../UniversalHeader";

document.title = "Books";

const Main = () => {
    return (
        <div>
            {/* <Header /> */}
            <BooksSearch />
        </div>
    );
};

export default Main;
