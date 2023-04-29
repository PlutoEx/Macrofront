import styled from '@emotion/styled';
import { css } from '@emotion/react';
import '@fontsource/russo-one';

export const ContainerStyled = styled.div`
  padding-left: 15%;
  padding-right: 15%;
  padding-top: 50px;
  background-color: #161616;
  color: white;
`;

export const HeaderContainerStyled = styled.div`
  padding-left: 15%;
  padding-right: 15%;
  padding-top: 50px;
  background-color: black;
  color: white;
`;

export const TextStyle = css`
  font-family: 'Russo One', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
`;

export const TextStyleS = css`
  font-family: 'Russo One', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
`;

export const BooksGridStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  grid-gap: 10px;
  margin-top: 30px;
  justify-content: space-evenly;
  justify-items: center;
  align-content: space-evenly;
  align-items: center;
  padding-bottom: 20px;
`;

export const ModalStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    zIndex: 9999,
  },
  content: {
    backgroundColor: '#333',
    border: 'none',
    borderRadius: '10px',
    padding: '20px',
    color: 'white',
    width: '50%',
    height: '75%',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.75)',
    zIndex: 10000,
  },
};

export const unsetButton = css`
  all: unset;
  cursor: pointer;
`;

export const CardStyle = css`
  display: flex;
  align-items: center;
  margin: 20px 0;
  font-size: 15px;
  font-family: 'Russo One', sans-serif;
`;

export const ImgStyle = css`
  margin-right: 20px;
  max-height: 400px;
`;

export const ExitButtonStyle = css`
  all: unset;
  position: absolute;
  top: 0;
  right: 5px;
`;

export const SearchStyle = css`
  display: flex;
  align-items: center;
`;

export const ColumnStyle1 = css`
  display: inline-block;
  width: 30%;
  vertical-align: top;
`;

export const ColumnStyle2 = css`
  display: inline-block;
  width: 60%;
  padding-left: 5%;
`;

export const HeaderTextStyle1 = css`
  font-family: 'Russo One', sans-serif;
  font-size: 5vw;
`;

export const HeaderTextStyle2 = css`
  font-family: 'Russo One', sans-serif;
  font-size: 1vw;
`;

export const HeaderTextStyle3 = css`
  font-family: 'Russo One', sans-serif;
  font-size: 1vw;
  color: black;
  margin-bottom: 5px;
`;

export const HeaderTextStyle4 = css`
  font-family: 'Russo One', sans-serif;
  font-size: 0.8vw;
  color: #555555;
  margin-bottom: 5px;
`;

export const HeaderTextStyle5 = css`
  all: unset;
  font-family: 'Russo One', sans-serif;
  font-size: 0.8vw;
  color: #00cedb;
`;

export const HeaderImgStyle = css`
  width: 100%;
`;

export const HeaderImgPopupStyle1 = css`
  background-color: white;
  border-radius: 10px;
  padding: 10px;
  z-index: 1;
  width: 50%;
  position: absolute;
  bottom: -5%;
  left: -5%;
`;

export const HeaderImgPopupStyle2 = css`
  background-color: white;
  border-radius: 10px;
  padding: 10px;
  z-index: 1;
  width: 50%;
  position: absolute;
  bottom: -5%;
  right: -5%;
`;

export const HeaderImgWrapperStyle = css`
  position: relative;
  margin-bottom: 60px;
`;

export const BookLinkStyle = css`
  color: #00cedb;
`;
