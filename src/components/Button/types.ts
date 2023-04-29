interface ButtonProps {
  children: React.ReactNode;
  buttonType: "button" | "scroll" | string;
  elementIdToScroll?: string;
  variant?: "primary" | "secondary" | string;
  className?: string;
  onClick?: () => void;
  page?: string;
}

export default ButtonProps;
