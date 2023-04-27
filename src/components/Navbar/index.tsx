import React from 'react';
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import { Container, NavbarStyled, textWithImg, img, linksWrap, inputStyles } from './Navbar.styles';

import Link from '../Link';
import Image from '../Image';
import Input from '../Input';

import capitalizeFirstLetter from '../helpers/capitalizeFirstLetter';

const Navbar: React.FC = () => {
  const team = 'MACRO FRONT END';
  const logoSrc = 'https://i.ibb.co/BsBfQYt/logo.png';
  const pages = ['films', 'anime', 'books'];

  return (
    <Container>
      <div css={NavbarStyled}>
        <div css={textWithImg}>
          <Image src={logoSrc} alt="MacroFrontEnd logo" width={65} height={54} css={img} />
          <span>{team}</span>
        </div>
        <div css={linksWrap}>
          {pages.map((page) => (
            <Link to={`/advfront/${page}`} key={page}>
              {capitalizeFirstLetter(page)}
            </Link>
          ))}
        </div>
        {/* Under development */}
        <Input
          type="text"
          placeholder="Search"
          onChange={(event) => console.log(event)}
          // css={inputStyles}
        />
      </div>
    </Container>
  );
};

export default Navbar;
