/** @jsx jsx */
import { jsx } from "@emotion/react";
import React from 'react';
import {
  ColumnStyle1,
  ColumnStyle2,
  HeaderContainerStyled, HeaderImgPopupStyle1, HeaderImgPopupStyle2, HeaderImgStyle, HeaderImgWrapperStyle,
  HeaderTextStyle1,
  HeaderTextStyle2,
  HeaderTextStyle3, HeaderTextStyle4, HeaderTextStyle5
} from "./Moive.styles";
import image1 from "./../../../public/movies/image_1.png";
import image2 from "./../../../public/movies/image_2.png";
import image3 from "./../../../public/movies/image_3.png";

function scroll(): void {
  const searchForm = document.getElementById('search-form');
  searchForm?.scrollIntoView({ behavior: 'smooth' });
}

const Header = () => {
  return (
    <HeaderContainerStyled>
      <div css={ColumnStyle1}>
        <div css={HeaderTextStyle1}>Movie Mania</div>
        <div css={HeaderTextStyle2}>Welcome to Movie Mania, your ultimate source for all things movies! With an extensive collection of films from all genres and eras, we've got something for every movie buff out there.</div>
      </div>
      <div css={ColumnStyle2}>
        <div css={HeaderImgWrapperStyle}>
          <img css={HeaderImgStyle} src={image1} alt="Image 1" />
          <div css={HeaderImgPopupStyle1}>
            <div css={HeaderTextStyle3}>Get ready for the summer blockbuster season</div>
            <div css={HeaderTextStyle4}>Discover the hottest new releases of the season and get ready for action-packed thrills, heart-warming romances, and everything in between.</div>
            <button css={HeaderTextStyle5} onClick={scroll}>See the movies</button>
          </div>
        </div>
        <div css={HeaderImgWrapperStyle}>
          <img css={HeaderImgStyle} src={image2} alt="Image 2" />
          <div css={HeaderImgPopupStyle2}>
            <div css={HeaderTextStyle3}>Explore the classics</div>
            <div css={HeaderTextStyle4}>Take a trip down memory lane with our collection of classic films from Hollywood's golden age.</div>
            <button css={HeaderTextStyle5} onClick={scroll}>See the movies</button>
          </div>
        </div>
        <div css={HeaderImgWrapperStyle}>
          <img css={HeaderImgStyle} src={image3} alt="Image 3" />
          <div css={HeaderImgPopupStyle1}>
            <div css={HeaderTextStyle3}>Find your next favorite movie</div>
            <div css={HeaderTextStyle4}>Whether you're in the mood for a comedy, drama, or action flick, we've got you covered. Browse our selection and discover your next must-see movie.</div>
            <button css={HeaderTextStyle5} onClick={scroll}>See the movies</button>
          </div>
        </div>
      </div>
    </HeaderContainerStyled>
  );
};

export default Header;
