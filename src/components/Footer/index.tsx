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
  aStyle,
} from './Footer.styles';

import { mainData, copyright, categories, developedBy } from './constants/text';

import Image from '../Image';
import logo from './../../public/logo.png';
let base_page = '/MacroFrontend';

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
                  return (
                    <Item key={`${i}_${j}`}>
                      <a css={aStyle} href={item[1]}>
                        {item[0]}
                      </a>
                    </Item>
                  );
                })}
              </DataColumn>
            );
          })}
        </DataRow>
        <FooterRow>
          <span>&copy;{copyright}</span>
          <Categories>
            {categories.map((category, i) => {
              return (
                <a css={aStyle} href={`${base_page}/${category[1]}`}>
                  <span key={i}>{category[0]}</span>
                </a>
              );
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
