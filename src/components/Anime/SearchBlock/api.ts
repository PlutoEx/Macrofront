import { AnimeApiProps, QueryProps } from './types';

const getParam = (prop: QueryProps) => {
  return prop.val !== '' ? `${prop.param}=${prop.val}` : '';
};

export async function getAnimeList({ query, type, rating, status, order_by }: AnimeApiProps) {
  const url = 'https://api.jikan.moe/v4/anime';
  const limit = '20';

  const props = [
    {
      param: 'q',
      val: query,
    },
    {
      param: 'type',
      val: type,
    },
    {
      param: 'rating',
      val: rating,
    },
    {
      param: 'status',
      val: status,
    },
    {
      param: 'order_by',
      val: order_by,
    },
    {
      param: 'limit',
      val: limit,
    },
  ];
  const queryParamsArr: string[] = [];
  props.forEach((prop) => getParam(prop) !== '' && queryParamsArr.push(getParam(prop)));
  const queryParams = queryParamsArr.join('&');

  const res = fetch(`${url}?${queryParams}`)
    .then((response) => response.json())
    .catch((error) => console.error(error));

  return res;
}
