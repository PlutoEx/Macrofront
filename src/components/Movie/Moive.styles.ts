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

export const LeftSideStyled = styled.div`
  flex: 1;
  margin-right: 20px;
  width: 30%;
  display: inline-block;
`;
export const RightSideStyled = styled.div`
  display: inline-block;
  width: calc(70% - 20px);
`;

export const TextSearchStyled = styled.div`
  margin-bottom: 20px;
  font-family: "Russo One", sans-serif;
  font-size: 1.4vw;
`;

export const FormStyled = styled.form`
  all: unset;
  width: 100%;
  background-color: red;
`;

export const TextGenresStyled = styled.div`
  margin-top: 30px;
  margin-bottom: 20px;
  font-family: "Russo One", sans-serif;
  font-size: 1.4vw;
`;

export const TopMoviesWrapperStyled = styled.div`
  padding-top: 30px;
  background-color: black;
  color: white;
  padding-left: 15%;
  padding-right: 15%;
  font-family: "Russo One", sans-serif;
`;

export const SelectTextStyled = styled.div`
  margin-right: 10px;
`;

export const MoviesGridStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 10px;
  margin-top: 30px;
  justify-content: space-evenly;
  justify-items: center;
  align-content: space-evenly;
  align-items: center;
  padding-bottom: 20px;
`;

export const UnsetButtonStyled = styled.button`
  all: unset;
`;

export const SelectGenreStyled = styled.div`
  display: flex;
  align-items: center;
`;

export const ModalStyles = {
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.75)',
        zIndex: 9999,
    },
    content: {
        backgroundColor: '#111',
        border: 'none',
        borderRadius: '10px',
        padding: '20px',
        color: 'white',
        width: '70%',
        height: '75%',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.75)',
        zIndex: 10000,
    }
};

export const CardStyle = css`
  display: flex;
  align-items: center;
  margin: 20px 0;
  font-size: 15px;
  font-family: "Russo One", sans-serif;
`;

export const ModalTitle = styled.div`
  font-family: "Russo One", sans-serif;
  font-size: 2vw;
`;

export const ImgStyled = styled.img`
  float: left;
  margin-right: 20px;
  margin-top: 20px;
  max-height: 400px;
`;

export const TextContainer = styled.div`
  font-family: "Russo One", sans-serif;
  font-size: 0.9vw;
  overflow: auto;
`;

export const ExitButtonStyled = styled.button`
  all: unset;
  position: absolute;
  top: 0;
  right: 5px;
`;

export const ScrollButtonStyled = styled.button`
  all: unset;
  display: flex;
  align-items: center;
  text-align: center;
  padding: 10px;
  background-color: black;
`;