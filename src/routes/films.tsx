import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import UniversalHeader from '../components/UniversalHeader';
import HeadMeta from './../components/HeadMeta';

import image1 from './../public/films_1.png';
import TopMovies from '../components/Movie/TopMovies';
import MovieSearch from '../components/Movie/MovieSearch';
let title_text1 = 'Film-go';
let description_text1: string =
  "Whether you're looking to express yourself with witty one-liners, hilarious images, or clever wordplay, MemeLab has got you covered. With its intuitive design and seamless functionality, you can create and share your favorite memes with just a few clicks.";

const FilmsPage = () => {
  return (
    <>
      <HeadMeta title="MacroFrontEnd films" description="Films page of Macrofrontend Team" />
      <Navbar />
      <UniversalHeader
        height={1080}
        background_img={image1}
        block1_width={445}
        title_text={title_text1}
        description_text={description_text1}
        button_variant="secondary"
        link_to_page="anime"
        button_text="Explore"
        button_type="scroll"
        element_id_to_scroll="search-form"
      />
      <TopMovies />
      <MovieSearch />
      <Footer />
    </>
  );
};

export default FilmsPage;
