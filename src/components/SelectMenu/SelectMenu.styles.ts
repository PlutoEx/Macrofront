import styled from "@emotion/styled";
import {theme} from '../theme/theme';
import {css, keyframes} from "@emotion/react";

export const SelectStyled = styled.div`
  margin-top: 10px;
  border-radius: 15px;
  color: black;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 15px;
  height: 30px;
  min-height: 30px;
  cursor: pointer;
`;

export const SelectSelectedStyled = styled.div`
  padding-left: 15px;
  background-color: white;
  border-radius: 15px;
  width: 85px;
  height: 30px;
  align-items: center;
  display: flex;
`;

export const SelectMenuStyled = styled.div`
  border: 1px solid black;
  position: absolute;
  z-index: 999;
  margin-top: 10px;
  border-radius: 15px;
  background: white;
  width: 100px;
`;

export const SelectOptionStyled = styled.div`
  border-radius: 15px;
  padding: 10px;

  &:hover {
    background-color: lightgray;
  }

  ${({isSelected}) => isSelected && css`background-color: gray;`}
`;

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(180deg);
  }
`;

export const IconStyled = styled.span`
  display: flex;
  align-items: center;
  margin-left: auto;
  margin-right: 10px;
  transition: transform 0.3s ease-in-out;
  transform-origin: center;
  ${({isOpen}) =>
          isOpen &&
          css`
            transform: rotate(180deg);
          `}
`;
