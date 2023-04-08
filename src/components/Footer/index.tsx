import React from 'react';
import { FooterStyled, Container, DataRow, FooterRow, DataColumn, Item, Categories } from './Footer.styles';

import { FooterProps } from './types';

import { mainData, copyright, categories, developedBy } from './constants/text';

export const Footer: React.FC<FooterProps> = ({ className }) => {
  return (
    <Container className={className}>
      <FooterStyled>
        <DataRow>
          {mainData.map((dataCol, i) => {
            return (
              <DataColumn key={i}>
                <span key={i}>{dataCol.title}</span>
                {dataCol.items.map((item, j) => {
                  return <Item key={`${i}_${j}`}>{item}</Item>;
                })}
              </DataColumn>
            );
          })}
        </DataRow>
        <FooterRow>
          <span>{copyright}</span>
          <Categories>
            {categories.map((category) => {
              return <span>{category}</span>;
            })}
          </Categories>
          <span>{developedBy}</span>
        </FooterRow>
      </FooterStyled>
    </Container>
  );
};
