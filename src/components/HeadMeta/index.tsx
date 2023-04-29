import React from 'react';
import MetaTags from 'react-meta-tags';

import favicon from './../../public/favicon.ico';

import { HeadMetaProps } from './types';

const HeadMeta: React.FC<HeadMetaProps> = ({ title, description }) => {
  return (
    <MetaTags>
      <title>{title}</title>
      <meta id="meta-description" name="description" content={description} />
      <meta id="og-title" property="og:title" content="Macrofrontend" />
      <link rel="icon" href={favicon} />
    </MetaTags>
  );
};

export default HeadMeta;
