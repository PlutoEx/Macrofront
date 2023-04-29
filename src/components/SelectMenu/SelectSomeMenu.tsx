import React from 'react';
import {Option, SelectSomeMenuProps} from "./types";
import {SelectButtonStyled, SelectSomeWrapperStyled} from "./SelectMenu.styles";

const SelectSomeMenu: React.FC<SelectSomeMenuProps> = ({options, active, onChange}) => {
    function handleChange (option: Option): void {
        let active_tmp = [...active];
        if (active_tmp.includes(option.value))
            active_tmp.splice(active_tmp.indexOf(option.value), 1);
        else
            active_tmp.push(option.value);
        if (option.value == 'all')
            active_tmp = ['all'];
        if (active_tmp.length == 0)
            active_tmp = ['all']
        else if (active_tmp.length > 1 && active_tmp.includes('all'))
            active_tmp.splice(active_tmp.indexOf('all'), 1);
        onChange(active_tmp);
    }

    return (
        <SelectSomeWrapperStyled>
            {options.map((option: Option) => (
                <SelectButtonStyled isSelected={active.includes(option.value)} key={option.value} onClick={() => {
                    handleChange(option)
                }}>{option.label}</SelectButtonStyled>
            ))}
        </SelectSomeWrapperStyled>
    );
};

export default SelectSomeMenu;