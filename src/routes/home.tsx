import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import UniversalHeader from '../components/UniversalHeader';
import BooksCollection from './../components/BooksCollection';
import HeadMeta from './../components/HeadMeta';

import image1 from './../public/anime_background.png';
import image2 from './../public/films_background.png';

let title_text1 = 'Animania';
let title_text2 = 'Film-go';
let title_text3 = 'Chapter Corner';
let description_text1: string =
  'Animania is a vast and immersive anime library that offers a wide range of anime content for fans of all ages and interests. From classic series to the latest releases, Animania has something for everyone.';
let description_text2: string =
  "Whether you're looking to express yourself with witty one-liners, hilarious images, or clever wordplay, MemeLab has got you covered. With its intuitive design and seamless functionality, you can create and share your favorite memes with just a few clicks.";
let description_text3: string =
  'ChapterCorner is a vibrant and user-friendly online book library and shop designed for book enthusiasts of all ages. With a vast collection of books across all genres, we offer a one-stop solution for all your literary needs.';

let title1 = "The world's most valuable children's books";
let description1 =
  "Children's books can be valuable if they are the right edition in the right condition. Discover 10 books that command high prices.";
import image_1 from './../public/books_1.png';

const HomePage = () => {
  return (
    <>
      <HeadMeta title="MacroFrontEnd" description="main page of Macrofrontend Team" />
      <Navbar />
      <UniversalHeader
        height={600}
        background_img={image1}
        block1_width={445}
        title_text={title_text1}
        description_text={description_text1}
        button_variant="primary"
        link_to_page="anime"
        button_text="Explore"
        button_type="button"
        element_id_to_scroll=""
      />
      <UniversalHeader
        height={600}
        background_img={image2}
        block1_width={445}
        title_text={title_text2}
        description_text={description_text2}
        button_variant="primary"
        link_to_page="films"
        button_text="Explore"
        button_type="button"
        element_id_to_scroll=""
      />
      <UniversalHeader
        height={600}
        block1_width={286}
        title_text={title_text3}
        description_text={description_text3}
        button_variant="primary"
        link_to_page="books"
        button_text="Explore"
        button_type="button"
        element_id_to_scroll=""
        children={[
          <BooksCollection
            title_text={title1}
            description_text={description1}
            description_side="left"
            img_src={image_1}
            img_alt="Image 1"
          />,
        ]}
      />
      <Footer />
    </>
  );
};

export default HomePage;
