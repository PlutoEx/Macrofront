/** @jsx jsx */
import { jsx } from '@emotion/react';
import React, { useState } from 'react';
import { InputStyled, InputWrapperStyled, SearchIconStyle } from './Input.styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { InputProps } from './types';

const Input: React.FC<InputProps> = ({ type, placeholder, onChange }) => {
  const [inputValue, setInputValue] = useState<string>('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const newValue: string = event.target.value;
    setInputValue(newValue);
    if (onChange) onChange(newValue);
  };

  return (
    <InputWrapperStyled>
      <FontAwesomeIcon css={SearchIconStyle} icon={faSearch} />
      <InputStyled
        type={type}
        placeholder={placeholder}
        value={inputValue}
        onChange={handleInputChange}
      />
    </InputWrapperStyled>
  );
};

export default Input;
