import React from 'react';
import ImageProps from './types';

const Image: React.FC<ImageProps> = (props) => {
  return <img {...props}></img>;
};

export default Image;
