import { css, SerializedStyles } from '@emotion/react';
import styled from '@emotion/styled';
import { InputProps } from './types';

export const InputWrapperStyled = styled.div<Pick<InputProps, 'inputbarType'>>`
  position: relative;
  background: white;
  font-family: Roboto, sans-serif;
  color: black;
  font-size: 16px;
  padding-left: 35px;
  display: flex;
  justify-content: center;

  ${(props) =>
    props.inputbarType === 'Primary'
      ? `
      border-radius: 8px;
      height: 30px;
    
      width: 400px;
      max-width: 400px;
    
      margin-right: 10px;
      margin-top: 10px;

    `
      : `
      border-radius: 28px;

      width: 350px;
      height: 32px;
    `}
`;

export const SearchIconStyle: SerializedStyles = css`
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);

  color: #49454f;
`;

export const InputStyled = styled.input`
  all: unset;
  padding-left: 40px;
  width: calc(100% - 40px);
`;
