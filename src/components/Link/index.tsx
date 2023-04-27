import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import { linkStyles } from './Link.styles';
import LinkProps from './types';

const Link: React.FC<LinkProps> = ({ children, ...props }) => {
  return (
    <RouterLink {...props} css={linkStyles}>
      {children}
    </RouterLink>
  );
};

export default Link;
