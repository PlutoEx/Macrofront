import React from 'react';
import { gridStyle } from './AnimeCards.styles';

import { AnimeCardsProps } from './types';

import Card from '../../Card';
import Button from '../../Button';

const AnimeCards: React.FC<AnimeCardsProps> = ({ data }) => {
  const renderCards = data.map((item) => {
    return (
      <Card
        img={item.images.jpg.image_url}
        alt={`Cover for ${item.title}`}
        title={item.title}
        // authors={item.studios && item.studios[0].name}
      />
    );
  });

  return <div css={gridStyle}>{renderCards}</div>;
};

export default AnimeCards;
