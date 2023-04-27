import React from 'react';
import {CardProps} from "./types";
import {CardImgStyled, CardStyled, CardSubtitleStyle, CardTitleStyle} from "./card.styles";

const Card: React.FC<CardProps> = ({img, alt, title, authors, pub_year}) => {
    return (
        <CardStyled>
            <CardImgStyled
                src={img}
                alt={alt}
            />
            <div>
                <CardTitleStyle>{title}</CardTitleStyle>
                {authors && <CardSubtitleStyle>{authors?.join(',')}</CardSubtitleStyle>}
                {pub_year && <CardSubtitleStyle>Publish year: {pub_year}</CardSubtitleStyle>}
            </div>
        </CardStyled>
    );
};

export default Card;