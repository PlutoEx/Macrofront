import React from 'react';

import Navbar from '../components/Navbar';
import MainBooks from '../components/Book/Main';
import Footer from '../components/Footer';

const BooksPage = () => {
  return (
    <>
      <Navbar />
      <MainBooks />
      <Footer />
    </>
  );
};

export default BooksPage;
