import React from "react";
import styled from '@emotion/styled'

const StyledButton = styled.button`
  color: brown;
  background-color: turquoise;
  padding: 10px 20px;
  margin: 20px  
`

export interface ButtonProps {
  primary?: boolean;
  backgroundColor?: string;
  size?: 'small' | 'medium' | 'large';
  label?: string;
  onClick?: () => void;

  children: string;
}

export const Button = ({ 
  children,
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  ...props
 }: ButtonProps): React.ReactElement => {
  return <StyledButton>{children}</StyledButton>
};