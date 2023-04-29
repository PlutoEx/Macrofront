import { css } from '@emotion/react';
import '@fontsource/russo-one';

export const gridStyle = css`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  grid-gap: 32px;
  justify-content: space-evenly;
  justify-items: center;
  align-content: space-evenly;
  align-items: center;

  margin-top: 64px;
`;
