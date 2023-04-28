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
import image1 from './../../public/books_1.png';
import image2 from './../../public/books_2.png';
import image3 from './../../public/books_3.png';

function scroll(): void {
  const searchForm = document.getElementById('search-form');
  searchForm?.scrollIntoView({ behavior: 'smooth' });
}

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
        <div css={HeaderImgWrapperStyle}>
          <img css={HeaderImgStyle} src={image1} alt="Image 1" />
          <div css={HeaderImgPopupStyle1}>
            <div css={HeaderTextStyle3}>The world's most valuable children's books</div>
            <div css={HeaderTextStyle4}>
              Children's books can be valuable if they are the right edition in the right condition.
              Discover 10 books that command high prices.
            </div>
            <button css={HeaderTextStyle5} onClick={scroll}>
              See the books
            </button>
          </div>
        </div>
        <div css={HeaderImgWrapperStyle}>
          <img css={HeaderImgStyle} src={image2} alt="Image 2" />
          <div css={HeaderImgPopupStyle2}>
            <div css={HeaderTextStyle3}>Investigate these classic mysteries</div>
            <div css={HeaderTextStyle4}>
              The British Library's Crime Classics series reprints detective novels and stories that
              were first published during the golden age of crime writing.
            </div>
            <button css={HeaderTextStyle5} onClick={scroll}>
              See the books
            </button>
          </div>
        </div>
        <div css={HeaderImgWrapperStyle}>
          <img css={HeaderImgStyle} src={image3} alt="Image 3" />
          <div css={HeaderImgPopupStyle1}>
            <div css={HeaderTextStyle3}>New Book Releases</div>
            <div css={HeaderTextStyle4}>
              From Prince Harry's memoir to Michael Connelly's latest novel, explore our recommended
              new books and discover literature that has everyone talking.
            </div>
            <button css={HeaderTextStyle5} onClick={scroll}>
              See the books
            </button>
          </div>
        </div>
      </div>
    </HeaderContainerStyled>
  );
};

export default Header;
