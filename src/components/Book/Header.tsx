import React from 'react';
import {
  ColumnStyle1,
  ColumnStyle2,
  HeaderContainerStyled,
  HeaderImgPopupStyle1,
  HeaderImgPopupStyle2,
  HeaderImgStyle,
  HeaderImgWrapperStyle,
  HeaderTextStyle1,
  HeaderTextStyle2,
  HeaderTextStyle3,
  HeaderTextStyle4,
  HeaderTextStyle5,
} from './Book.styles';

import BooksCollection from './../BooksCollection';
import Book from './Book';

function scroll(): void {
  const searchForm = document.getElementById('search-form');
  searchForm?.scrollIntoView({ behavior: 'smooth' });
}

import image1 from './../../public/books_1.png';
import image2 from './../../public/books_2.png';
import image3 from './../../public/books_3.png';
let title1 = "The world's most valuable children's books";
let title2 = "Investigate these classic mysteries";
let title3 = "New Book Releases";
let description1 = "Children's books can be valuable if they are the right edition in the right condition. Discover 10 books that command high prices.";
let description2 = "The British Library's Crime Classics series reprints detective novels and stories that were first published during the golden age of crime writing.";
let description3 = "From Prince Harry's memoir to Michael Connelly's latest novel, explore our recommended new books and discover literature that has everyone talking.";


const Header = () => {
  return (
    <HeaderContainerStyled>
      <div css={ColumnStyle1}>
        <div css={HeaderTextStyle1}>Chapter Corner</div>
        <div css={HeaderTextStyle2}>
          ChapterCorner is a vibrant and user-friendly online book library and shop designed for
          book enthusiasts of all ages. With a vast collection of books across all genres, we offer
          a one-stop solution for all your literary needs.
        </div>
      </div>
      <div css={ColumnStyle2}>
        <BooksCollection title_text={title1} description_text={description1} description_side="left" img_src={image1} img_alt="Image 1" />
        <BooksCollection title_text={title2} description_text={description2} description_side="right" img_src={image2} img_alt="Image 2" />
        <BooksCollection title_text={title3} description_text={description3} description_side="left" img_src={image3} img_alt="Image 3" />
      </div>
    </HeaderContainerStyled>
  );
};

export default Header;
