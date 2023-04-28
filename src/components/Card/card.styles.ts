import styled from "@emotion/styled";
import "@fontsource/russo-one";

export const CardStyled = styled.div`
  display: flex;
  flex-direction: column;
  height: 270px;
  width: 150px;
  overflow: hidden;
`;

export const CardImgStyled = styled.img`
  height: 190px;
  min-height: 190px;
  width: auto;
  object-fit: cover;
  object-position: center;
  border-radius: 4px;
  margin-bottom: 4px;
`;

export const CardTitleStyle = styled.div`
  font-family: "Russo One", sans-serif;
  font-weight: 400;
  font-size: 0.8vw;
  margin-bottom: 2px;
`;

export const CardSubtitleStyle = styled.div`
  font-family: "Russo One", sans-serif;
  font-size: 0.7vw;
  color: #BDBDBD;
  margin-top: 0;
  margin-bottom: 2px;
`;
