import { wrap, BannerStyled, titleStyle, titleWrap, imageStyle } from './Banner.styles';
import image from './../../../public/anime_2.png';
import Image from '../../Image';

const Banner: React.FC = () => {
  const title = 'Explore the world of anime';

  return (
    <div css={wrap}>
      <BannerStyled>
        <Image src={image} alt="Anime Page Banner" width={1275} height={1078} css={imageStyle} />
        <div css={titleWrap}>
          <span css={titleStyle}>{title}</span>
        </div>
      </BannerStyled>
    </div>
  );
};

export default Banner;
