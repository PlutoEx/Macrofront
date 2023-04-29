export interface AnimeCardProps {
  images: {
    jpg: {
      image_url: string;
    };
  };
  title: string;
  authors: {
    name: string;
  }[];
}

export interface AnimeCardsProps {
  data: AnimeCardProps[];
}
