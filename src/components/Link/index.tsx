import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { linkStyles } from './Link.styles';
import LinkProps from './types';

const Link: React.FC<LinkProps> = ({ children, css, ...props }) => {
  return (
    <RouterLink {...props} css={{ ...linkStyles, ...css }}>
      {children}
    </RouterLink>
  );
};

export default Link;
