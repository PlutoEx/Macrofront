import React from 'react';
import { ButtonStyled } from './Button.styles';
import ButtonProps from './types';

const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', className, onClick }) => {
  return (
    <ButtonStyled className={className} onClick={onClick} variant={variant}>
      {children}
    </ButtonStyled>
  );
};

export default Button;
