import { css } from '@emotion/react';
import styled from '@emotion/styled';
import '@fontsource/russo-one';

export const Container = styled.nav`
  background-color: #000000;
  display: flex;
  justify-content: center;
  height: 75px;
`;

export const NavbarStyled = css({
  fontFamily: "'Russo One', sans-serif",
  color: '#ffffff',
  display: 'flex',
  alignItems: 'center',
});

export const textWithImg = css({
  fontSize: '18px',
  display: 'flex',
  alignItems: 'center',
});

export const img = css({
  marginRight: '12px',
});

export const linksWrap = css({
  fontSize: '16px',
  display: 'flex',
  justifyContent: 'space-between',
  margin: '28px 45px 28px 125px',
  width: '255px',
});
