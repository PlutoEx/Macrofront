import React from 'react';
import { Container, NavbarStyled, textWithImg, img, linksWrap } from './Navbar.styles';

import Link from '../Link';
import Image from '../Image';
import Input from '../Input';

import capitalizeFirstLetter from '../../../helpers/capitalizeFirstLetter';
import logo from './../../public/logo.png';

const Navbar: React.FC = () => {
  const team = 'MACRO FRONT END';
  const pages = ['films', 'anime', 'books'];

  return (
    <Container>
      <div css={NavbarStyled}>
        <div css={textWithImg}>
          <Link to="/Macrofrontend">
            <Image src={logo} alt="MacroFrontEnd logo" width={65} height={54} css={img} />
          </Link>
          <span>{team}</span>
        </div>
        <div css={linksWrap}>
          {pages.map((page) => (
            <Link to={`/MacroFrontend/${page}`} key={page}>
              {capitalizeFirstLetter(page)}
            </Link>
          ))}
        </div>
        <Input
          type="text"
          placeholder="Search"
          onChange={(event) => console.log(event)}
          inputbarType="Secondary"
        />
      </div>
    </Container>
  );
};

export default Navbar;
