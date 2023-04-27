import React from 'react';
import { CardProps } from './types';
import {
  CardImgStyled,
  CardStyled,
  CardSubtitleStyle,
  CardTitleStyle,
  CardContentStyle,
} from './card.styles';

const Card: React.FC<CardProps> = ({ img, alt, title, authors, pub_year }) => {
  return (
    <CardStyled>
      <CardImgStyled src={img} alt={alt} />
      <CardContentStyle>
        <CardTitleStyle>{title}</CardTitleStyle>
        {authors && <CardSubtitleStyle>{authors?.join(',')}</CardSubtitleStyle>}
        {pub_year && <CardSubtitleStyle>Publish year: {pub_year}</CardSubtitleStyle>}
      </CardContentStyle>
    </CardStyled>
  );
};

export default Card;
