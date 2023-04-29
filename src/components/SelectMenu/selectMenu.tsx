import React, { useState } from 'react';
import {
  IconStyled,
  SelectMenuStyled,
  SelectOptionTextStyled,
  SelectOptionStyled,
  SelectSelectedStyled,
  SelectStyled,
} from './SelectMenu.styles';
import { Option, SelectMenuProps } from './types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretUp } from '@fortawesome/free-solid-svg-icons';

const SelectMenu: React.FC<SelectMenuProps> = ({ options, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<Option>(options[0]);

  const handleOptionClick = (option: Option) => {
    setSelectedOption(option);
    setIsOpen(false);
    onChange(option);
  };

  return (
    <SelectStyled>
      <SelectSelectedStyled onClick={() => setIsOpen(!isOpen)}>
        <SelectOptionTextStyled>{selectedOption.label}</SelectOptionTextStyled>
        <IconStyled isOpen={isOpen}>
          <FontAwesomeIcon icon={faCaretUp} size="sm" color="#49454F" />
        </IconStyled>
      </SelectSelectedStyled>
      {isOpen && (
        <SelectMenuStyled>
          {options.map((option) => (
            <SelectOptionStyled
              isSelected={option.value === selectedOption?.value}
              key={option.value}
              onClick={() => handleOptionClick(option)}
            >
              {option.label}
            </SelectOptionStyled>
          ))}
        </SelectMenuStyled>
      )}
    </SelectStyled>
  );
};

export default SelectMenu;
