import {css} from "@emotion/react";
import styled from "@emotion/styled";

export const InputWrapperStyled = styled.div`
  position: relative;
  border-radius: 15px;
  background: white;
  color: black;
  font-family: Roboto, sans-serif;
  font-size: 20px;
  font-weight: 400;
  height: 30px;
  line-height: 30px;
  width: 400px;
  max-width: 400px;
  margin-right: 10px;
  margin-top: 10px;
  padding-left: 35px;
`;

export const SearchIconStyle = css`
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
`;

export const InputStyled = styled.input`
  all: unset;
`;
