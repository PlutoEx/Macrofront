interface ButtonProps {
  children: React.ReactNode;

  variant?: "primary" | "secondary";
  className?: string;
  onClick?: () => void;
}

export default ButtonProps;
