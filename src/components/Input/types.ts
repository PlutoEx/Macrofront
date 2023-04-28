export interface InputProps {
  type: string;
  placeholder: string;
  onChange: (value: string) => void;
  inputbarType?: 'Primary' | 'Secondary';
}
