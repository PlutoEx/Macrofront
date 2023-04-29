import React from 'react';
import {
  ButtonStyled,
  ScrollButtonStyle
} from './Button.styles';
import ButtonProps from './types';

const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', className, onClick, page, buttonType = "button", elementIdToScroll }) => {
  if (buttonType === "scroll") {
    function scroll(): void {
      let element: string;
      if (elementIdToScroll == undefined) {
        element = "";
      } else {
        element = elementIdToScroll;
      }
      const searchForm = document.getElementById(element);
      searchForm?.scrollIntoView({ behavior: 'smooth' });
    }
    //Usual button which scrolls down to particular block
    return (
      <button css={ScrollButtonStyle(variant)} onClick={scroll}>
        {children}
      </button>
    );
  } else {
    //Usual button which redirects to another page
    return (
      <a href={page}>
        <ButtonStyled className={className} onClick={onClick} variant={variant}>
          {children}
        </ButtonStyled>
      </a>
    );
  }

};

export default Button;
