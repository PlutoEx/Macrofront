import styled from '@emotion/styled';
import ButtonProps from './types';
import { theme } from '../theme/theme';
import { css } from '@emotion/react';
export const ButtonStyled = styled.button<Pick<ButtonProps, 'variant'>>`
  border-radius: 8px;
  border: 0px;
  padding: 18px 55px 18px 55px;
  margin: 20px 0px 20px 0px;
  font-size: 16px;
  font-style: Roboto;
  cursor: pointer;

  ${(props) =>
    props.variant === 'primary' &&
    `
        background: white; 
        color: black;
    `};
  ${(props) =>
    props.variant === 'secondary' &&
    `
        background: black;
        color: white;
    `}
`;

export const ScrollButtonStyle = (variant: string) => css`
  border-radius: 8px;
  border: 0px;
  padding: 18px 55px 18px 55px;
  margin: 20px 0px 20px 0px;
  font-size: 16px;
  font-style: Roboto;
  cursor: pointer;
  ${variant === 'primary' &&
  `
background: white; 
color: black;
`}
  ${variant === 'secondary' &&
  `
background: black; 
color: white;
`}
`;
