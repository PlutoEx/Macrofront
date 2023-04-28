const accessToken = 'hxR8HRkCyARVhaTAunAUZY9gCedkt9HybXVbyclC';

export async function getAnimeList() {
  const url = 'https://anilist.co/graphiql/';
  const query = `
  query ($page: Int, $perPage: Int, $search: String) {
    Page(page: $page, perPage: $perPage) {
      pageInfo {
        total
        perPage
      }
      media(search: $search, type: ANIME, sort: FAVOURITES_DESC) {
        id
        title {
          romaji
          english
          native
        }
        type
        genres
      }
    }
  }
`;

  const variables = {
    search: query,
    page: 1,
    perPage: 3,
  };

  const headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    Authorization: 'Bearer ' + accessToken,
  };

  const result = await fetch(url, {
    method: 'POST',
    headers,
    body: query,
  })
    .then((res) => res.json)
    .then((data) => console.log('Data:', data))
    .catch((err) => console.log('fuuuuuuuuck', err.message));
}
