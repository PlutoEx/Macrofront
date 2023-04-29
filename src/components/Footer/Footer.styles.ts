import { css } from '@emotion/react';
import styled from '@emotion/styled';
import '@fontsource/russo-one';



const linkHover = css({
  color: 'white',
  cursor: 'pointer'
});

export const aStyle = css({
  color: 'inherit',
  textDecoration: 'none',
  '&:hover': linkHover,
});


export const Container = styled.footer`
  background-color: #000000;

  display: flex;
  padding: 0 15px;
`;

export const FooterStyled = styled.div`
  font-family: 'Russo One', sans-serif;
  color: #ffffff;

  width: 1290px;
  margin: 60px auto;
`;

export const DataRow = styled.div`
  font-size: 15px;
  display: flex;
  justify-content: space-between;

  width: 750px;

  margin: 0 auto 66px;
`;

export const DataColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Item = styled.span`
  color: #d2d3d4;

  padding-top: 8px;
`;

export const FooterRow = styled.div`
  font-size: 13px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Categories = styled.span`
  display: flex;
  justify-content: space-between;

  width: 250px;
`;

export const TextWithImage = styled.div`
  display: flex;
  align-items: center;
`;

export const imageCSS = css({
  margin: '0 0 3px 6px',
});
