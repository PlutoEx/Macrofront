import {Genres} from "../Movie/types";

export interface SelectMenuProps {
  options: Option[];
  onChange: Function;
}

export interface SelectSomeMenuProps {
    options: Option[];
    active: string[];
    onChange: (active: string[]) => void;
}


export interface Option {
    value: Genres | string;
    label: string;
}

export interface IconStyledProps {
  isOpen: boolean;
}

export interface SelectOptionStyledProps {
    isSelected: boolean;
}
