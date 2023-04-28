import styled from '@emotion/styled';
import { css } from '@emotion/react';
import '@fontsource/russo-one';

export const wrap = css`
  background-color: #161616;
  display: flex;
  justify-content: center;
  padding: 55px 0 30px;
`;

export const BannerStyled = styled.div`
  position: relative;
`;

export const imageStyle = css``;

export const titleStyle = css`
  font-family: 'Russo One', sans-serif;
  font-size: 72px;
  color: #fff;
`;

export const titleWrap = css`
  position: absolute;
  top: 45%;
  z-index: 1;

  background-color: #000;
  opacity: 0.8;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 162px;
`;
