import React from "react";
import { ButtonStyled } from "./Button.styles";
import { ButtonProps } from "./types";

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  className,
  onClick,
}) => {
  return (
    <ButtonStyled className={className} onClick={onClick} variant={variant}>
      {children}
    </ButtonStyled>
  );
};
