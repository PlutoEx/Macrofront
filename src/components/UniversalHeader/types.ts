interface HeaderProps {
  height: number;
  background_img?: string | "";
  block1_width: number;
  title_text: string;
  description_text: string;
  button_variant: string;
  link_to_page: string;
  button_text: string;
  button_type: "button" | "scroll" | string;
  element_id_to_scroll: string;
  children?: React.ReactNode[];
}

export default HeaderProps;
