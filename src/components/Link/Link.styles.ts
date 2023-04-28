import { css } from '@emotion/react';

const linkHover = css({
  textDecoration: 'underline',
});
export const linkStyles = css({
  color: 'inherit',
  textDecoration: 'none',
  '&:hover': linkHover,
});
