
type CustomType = {
  key: string;
  name: string;
  value: string;
};

type MovieInfo = {
  title: string;
  releaseDate: string;
  director: string;
  producers: string[];
  actors: string[];
  description: string;
  posterUrl: string | null;
};

type MovieProps = {
  movieKeys: string[];
  moviePosterId: number;
  isOpen: boolean;
  handleClose: () => void;
};



