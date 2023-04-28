import React from 'react';
import Navbar from '../components/Navbar';
import Banner from '../components/Anime/Banner';
import SearchBlock from '../components/Anime/SearchBlock';
import Footer from '../components/Footer';

const AnimePage = () => {
  return (
    <>
      <Navbar />
      <h1>Anime Header </h1>
      <Banner />
      <SearchBlock />
      <Footer />
    </>
  );
};

export default AnimePage;
