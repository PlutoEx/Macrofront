import styled from '@emotion/styled';
import ButtonProps from './types';
import { theme } from '../theme/theme';

export const ButtonStyled = styled.button<Pick<ButtonProps, 'variant'>>`
  border-radius: 8px;
  padding: 10px 20px;
  margin: 20px;

  ${(props) =>
    props.variant === 'primary' &&
    `
        background: ${theme.palette.Button.primary}; 
        color: black;
    `};
  ${(props) =>
    props.variant === 'secondary' &&
    `
        background: ${theme.palette.Button.secondary};
        color: white;
    `}
`;
