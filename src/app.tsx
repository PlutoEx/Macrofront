import React from 'react';
import { Route, Routes } from 'react-router-dom';

import AnimePage from './routes/anime';
import FilmsPage from './routes/films';
import BooksPage from './routes/books';
import HomePage from './routes/home';

const App = () => {
  return (
    <Routes>
      <Route path="/advfront/" element={<HomePage />} />
      <Route path="/advfront/anime" element={<AnimePage />} />
      <Route path="/advfront/films" element={<FilmsPage />} />
      <Route path="/advfront/books" element={<BooksPage />} />
    </Routes>
  );
};

export default App;
