import React, {useState} from "react";
import {
    IconStyled,
    SelectMenuStyled,
    SelectOptionStyled,
    SelectSelectedStyled,
    SelectStyled
} from "./SelectMenu.styles"
import {Option, SelectMenuProps} from "./types";

const SelectMenu: React.FC<SelectMenuProps> = ({options, onChange}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState<Option>(options[0]);

    const handleOptionClick = (option: Option) => {
        setSelectedOption(option);
        setIsOpen(false);
        onChange(option)
    };

    return (
        <SelectStyled>
            <SelectSelectedStyled onClick={() => setIsOpen(!isOpen)}>
                <span>{selectedOption.label}</span>
                <IconStyled isOpen={isOpen}>&#9207;</IconStyled>
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