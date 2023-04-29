import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { IconStyledProps, SelectOptionStyledProps } from './types';

export const SelectStyled = styled.div`
  border-radius: 8px;
  color: black;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 15px;
  height: 30px;
  min-height: 30px;
  cursor: pointer;
  margin-top: 10px;
`;

export const SelectSelectedStyled = styled.div`
  padding-left: 15px;
  background-color: white;
  border-radius: 8px;
  width: 85px;
  height: 30px;
  align-items: center;
  display: flex;
`;

export const SelectOptionTextStyled = styled.span`
  color: #49454f;
`;

export const SelectMenuStyled = styled.div`
  border: 1px solid black;
  position: absolute;
  z-index: 1;
  margin-top: 10px;
  border-radius: 8px;
  background: white;
  width: 100px;
  max-height: 300px;
  overflow-y: auto;
`;

export const SelectOptionStyled = styled.div<SelectOptionStyledProps>`
  border-radius: 8px;
  padding: 10px;

  &:hover {
    background-color: lightgray;
  }

  ${({ isSelected }) =>
    isSelected &&
    css`
      background-color: gray;
    `}
`;

export const IconStyled = styled.span<IconStyledProps>`
  display: flex;
  align-items: center;
  margin-left: auto;
  margin-right: 10px;
  transition: transform 0.3s ease-in-out;
  transform-origin: center;
  ${({ isOpen }) =>
    isOpen &&
    css`
      transform: rotate(180deg);
    `}
`;

export const SelectSomeWrapperStyled = styled.div`
  padding: 5px;
  background: linear-gradient(0deg, rgba(208, 188, 255, 0.05), rgba(208, 188, 255, 0.05)), #000000;
  border-radius: 16px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  font-family: 'Roboto', sans-serif;
  font-size: 1vw;
`;

export const SelectButtonStyled = styled.button<SelectOptionStyledProps>`
  all: unset;
  margin: 2px;
  padding: 4px;
  border: 1px solid #7f7f7f;
  border-radius: 8px;

  ${({ isSelected }) =>
    isSelected &&
    css`
      background-color: green;
    `}
`;
