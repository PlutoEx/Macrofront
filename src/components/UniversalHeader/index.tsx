import React from 'react';
import {
  ColumnStyle1,
  ColumnStyle2,
  HeaderContainerStyled,
  HeaderImgPopupStyle1,
  HeaderImgPopupStyle2,
  HeaderImgStyle,
  HeaderImgWrapperStyle,
  HeaderTextStyle1,
  HeaderTextStyle2,
  HeaderTextStyle3,
  HeaderTextStyle4,
  HeaderTextStyle5,
  BackgroundHolderStyle,
  ColumnFlexContainerStyle,
} from './UniversalHeader.styles';

import HeaderProps from './types';
import { MainFlexContainer } from './UniversalHeader.styles';
import Button from './../Button';

// const Link: React.FC<LinkProps> = ({ children, css, ...props }) => {
const UniversalHeader: React.FC<HeaderProps> = ({
  height,
  background_img = '',
  block1_width,
  title_text,
  description_text,
  button_variant,
  link_to_page,
  button_text,
  button_type,
  element_id_to_scroll,
  children = [],
}) => {
  let block2_width: number = 1490 - block1_width;
  return (
    <div css={BackgroundHolderStyle(height, background_img)}>
      <MainFlexContainer>
        <div css={ColumnFlexContainerStyle(block1_width, 'left')}>
          <div css={ColumnStyle1}>
            <div css={HeaderTextStyle1}>{title_text}</div>
            <div css={HeaderTextStyle2}>{description_text}</div>

            <Button
              children={button_text}
              variant={button_variant}
              page={'/MacroFrontend/' + link_to_page}
              buttonType={button_type}
              elementIdToScroll={element_id_to_scroll}
            />
          </div>
        </div>
        <div css={ColumnFlexContainerStyle(block2_width, 'right')}>
          {children.map((child) => child)}
        </div>
      </MainFlexContainer>
    </div>
  );
};

export default UniversalHeader;
