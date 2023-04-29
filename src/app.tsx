import React from 'react';
import { Route, Routes } from 'react-router-dom';

import AnimePage from './routes/anime';
import FilmsPage from './routes/films';
import BooksPage from './routes/books';
import HomePage from './routes/home';

const App = () => {
  return (
    <Routes>
      <Route path="/MacroFrontend/" element={<HomePage />} />
      <Route path="/MacroFrontend/anime" element={<AnimePage />} />
      <Route path="/MacroFrontend/films" element={<FilmsPage />} />
      <Route path="/MacroFrontend/books" element={<BooksPage />} />
    </Routes>
  );
};

export default App;
