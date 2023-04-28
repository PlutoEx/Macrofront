import React from 'react';
import {
  FooterStyled,
  Container,
  DataRow,
  FooterRow,
  DataColumn,
  Item,
  Categories,
  TextWithImage,
  imageCSS,
} from './Footer.styles';

import { mainData, copyright, categories, developedBy } from './constants/text';

import Image from '../Image';
import logo from './../../public/logo.png';

const Footer: React.FC = () => {
  return (
    <Container>
      <FooterStyled>
        <DataRow>
          {mainData.map((dataCol, i) => {
            return (
              <DataColumn key={i}>
                <span>{dataCol.title}</span>
                {dataCol.items.map((item, j) => {
                  return <Item key={`${i}_${j}`}>{item}</Item>;
                })}
              </DataColumn>
            );
          })}
        </DataRow>
        <FooterRow>
          <span>&copy;{copyright}</span>
          <Categories>
            {categories.map((category, i) => {
              return <span key={i}>{category}</span>;
            })}
          </Categories>
          <TextWithImage>
            <span>{developedBy}</span>
            <Image src={logo} alt="MacroFrontEnd logo" width={40} height={33} css={imageCSS} />
          </TextWithImage>
        </FooterRow>
      </FooterStyled>
    </Container>
  );
};

export default Footer;
