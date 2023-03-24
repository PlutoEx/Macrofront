import styled from "@emotion/styled";
import {css} from "@emotion/react";
import "@fontsource/russo-one";

export const ContainerStyled = styled.div`
  padding-left: 15%;
  padding-right: 15%;
  padding-top: 50px;
  background-color: #161616;
  color: white;
`;

export const TextStyle = css`
  font-family: "Russo One", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
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
`;

export const BookCardStyled = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
  height: 300px;
  width: 150px;
  overflow: hidden;
`;

export const BookCardImgStyled = styled.img`
  height: 190px;
  min-height: 190px;
  width: auto;
  object-fit: cover;
  object-position: center;
`;

export const BookInfoStyled = styled.div`
  padding: 10px;
`;