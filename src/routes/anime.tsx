import React from 'react';
import Navbar from '../components/Navbar';
import Banner from '../components/Anime/Banner';
import SearchBlock from '../components/Anime/SearchBlock';
import Footer from '../components/Footer';
import UniversalHeader from '../components/UniversalHeader';
import HeadMeta from './../components/HeadMeta';

import image1 from './../public/anime_1.png';

let title_text1 = 'Animania';
let description_text1: string =
  'Animania is a vast and immersive anime library that offers a wide range of anime content for fans of all ages and interests. From classic series to the latest releases, Animania has something for everyone.';

const AnimePage = () => {
  return (
    <>
      <HeadMeta title="MacroFrontEnd anime" description="Anime page of Macrofrontend Team" />
      <Navbar />
      <UniversalHeader
        height={1080}
        background_img={image1}
        block1_width={445}
        title_text={title_text1}
        description_text={description_text1}
        button_variant="primary"
        link_to_page="anime"
        button_text="Explore"
        button_type="scroll"
        element_id_to_scroll="search-form"
      />
      <Banner />
      <SearchBlock />
      <Footer />
    </>
  );
};

export default AnimePage;
