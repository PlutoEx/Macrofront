import { wrap, BannerStyled, titleStyle, titleWrap, imageStyle } from './SearchBlock.styles';
import image from './../../../public/anime_2.png';
import Image from '../../Image';

import { getAnimeList } from './api';

const SearchBlock: React.FC = () => {
  const title = 'I hate jiga dryga';

  getAnimeList();

  return (
    <div css={wrap}>
      <BannerStyled>
        <Image src={image} alt="Anime Page Banner" width={1000} height={800} css={imageStyle} />
        <div css={titleWrap}>
          <span css={titleStyle}>{title}</span>
        </div>
      </BannerStyled>
    </div>
  );
};

export default SearchBlock;
