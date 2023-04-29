export interface SelectMenuProps {
  options: Option[];
  onChange: Function;
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
