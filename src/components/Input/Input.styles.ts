import {css, SerializedStyles} from "@emotion/react";
import styled from "@emotion/styled";

export const InputWrapperStyled = styled.div`
  position: relative;
  border-radius: 8px;
  background: white;
  color: black;
  font-family: Roboto, sans-serif;
  font-size: 20px;
  font-weight: 400;
  width: 100%;
  height: 30px;
  line-height: 30px;
  margin-top: 10px;
`;

export const SearchIconStyle: SerializedStyles = css`
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
`;

export const InputStyled = styled.input`
  all: unset;
  padding-left: 40px;
  width: calc(100% - 40px);
`;
