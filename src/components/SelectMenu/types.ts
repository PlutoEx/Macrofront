export interface SelectMenuProps {
    options: Option[];
    onChange: (value: Option) => void;
}

export interface Option {
    value: string;
    label: string;
}

export interface IconStyledProps {
    isOpen: boolean;
}

export interface SelectOptionStyledProps {
    isSelected: boolean;
}
