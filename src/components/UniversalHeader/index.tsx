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

import image1 from './../../public/books_1.png';
import image2 from './../../public/books_2.png';
import image3 from './../../public/books_3.png';



// const Link: React.FC<LinkProps> = ({ children, css, ...props }) => {
const UniversalHeader: React.FC<HeaderProps> = ({ height, background_img = "", block1_width, title_text, description_text, button_variant, link_to_page, button_text, button_type, element_id_to_scroll, children = [] }) => {
  let block2_width: number = 1490 - block1_width;
  return (
    <div css={BackgroundHolderStyle(height, background_img)}>
      <MainFlexContainer>
        <div css={ColumnFlexContainerStyle(block1_width, "left")}>
          <div css={ColumnStyle1}>
            <div css={HeaderTextStyle1}>{title_text}</div>
            <div css={HeaderTextStyle2}>{description_text}</div>

            <Button children={button_text} variant={button_variant} page={"http://localhost:8099/advfront/" + link_to_page} buttonType={button_type} elementIdToScroll={element_id_to_scroll} />
          </div>
        </div>
        <div css={ColumnFlexContainerStyle(block2_width, "right")}>
          {children.map((child) => (
            child
          ))}
        </div>
      </MainFlexContainer>
    </div>
  );
};



export default UniversalHeader;
// <HeaderContainerStyled>
//   <div css={ColumnStyle1}>
//     <div css={HeaderTextStyle1}>Chapter Corner</div>
//     <div css={HeaderTextStyle2}>
//       ChapterCorner is a vibrant and user-friendly online book library and shop designed for
//       book enthusiasts of all ages. With a vast collection of books across all genres, we offer
//       a one-stop solution for all your literary needs.
//     </div>
//   </div>
//   <div css={ColumnStyle2}>
//     <div css={HeaderImgWrapperStyle}>
//       <img css={HeaderImgStyle} src={image1} alt="Image 1" />
//       <div css={HeaderImgPopupStyle1}>
//         <div css={HeaderTextStyle3}>The world's most valuable children's books</div>
//         <div css={HeaderTextStyle4}>
//           Children's books can be valuable if they are the right edition in the right condition.
//           Discover 10 books that command high prices.
//         </div>
//         <button css={HeaderTextStyle5} onClick={scroll}>
//           See the books
//         </button>
//       </div>
//     </div>
//     <div css={HeaderImgWrapperStyle}>
//       <img css={HeaderImgStyle} src={image2} alt="Image 2" />
//       <div css={HeaderImgPopupStyle2}>
//         <div css={HeaderTextStyle3}>Investigate these classic mysteries</div>
//         <div css={HeaderTextStyle4}>
//           The British Library's Crime Classics series reprints detective novels and stories that
//           were first published during the golden age of crime writing.
//         </div>
//         <button css={HeaderTextStyle5} onClick={scroll}>
//           See the books
//         </button>
//       </div>
//     </div>
//     <div css={HeaderImgWrapperStyle}>
//       <img css={HeaderImgStyle} src={image3} alt="Image 3" />
//       <div css={HeaderImgPopupStyle1}>
//         <div css={HeaderTextStyle3}>New Book Releases</div>
//         <div css={HeaderTextStyle4}>
//           From Prince Harry's memoir to Michael Connelly's latest novel, explore our recommended
//           new books and discover literature that has everyone talking.
//         </div>
//         <button css={HeaderTextStyle5} onClick={scroll}>
//           See the books
//         </button>
//       </div>
//     </div>
//   </div>
// </HeaderContainerStyled>
