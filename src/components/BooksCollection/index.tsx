import React from 'react';
import {
  HeaderImgPopupStyle1,
  HeaderImgPopupStyle2,
  HeaderImgStyle,
  HeaderImgWrapperStyle,
  FlexContainer,
  HeaderTextStyle3,
  HeaderTextStyle4,
  HeaderTextStyle5,
} from './Book.styles';
import BooksCollectionProps from './types';


function scroll(): void {
  const searchForm = document.getElementById('search-form');
  searchForm?.scrollIntoView({ behavior: 'smooth' });
}

const BooksCollection: React.FC<BooksCollectionProps> = ({ img_src, img_alt, title_text, description_text, description_side }) => {
  if (description_side === "left") {
    return (
      <div css={HeaderImgWrapperStyle}>
        <img css={HeaderImgStyle} src={img_src} alt={img_alt} />
        <div css={HeaderImgPopupStyle1}>
          <div css={FlexContainer}>
            <div css={HeaderTextStyle3}>{title_text}</div>
            <div css={HeaderTextStyle4}>{description_text}</div>
            <button css={HeaderTextStyle5} onClick={scroll}>
              See the books
            </button>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div css={HeaderImgWrapperStyle}>
        <img css={HeaderImgStyle} src={img_src} alt={img_alt} />
        <div css={HeaderImgPopupStyle2}>
          <div css={FlexContainer}>
            <div css={HeaderTextStyle3}>{title_text}</div>
            <div css={HeaderTextStyle4}>{description_text}</div>
            <button css={HeaderTextStyle5} onClick={scroll}>
              See the books
            </button>
          </div>
        </div>
      </div>
    );
  }

};

export default BooksCollection;
