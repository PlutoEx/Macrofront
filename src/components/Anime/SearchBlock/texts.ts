export const selectBars = [
  {
    type: 'type',
    value: 'Type',
    options: [
      { value: '', label: 'Any' },
      { value: 'tv', label: 'TV' },
      { value: 'movie', label: 'Movie' },
      { value: 'ova', label: 'Ova' },
      { value: 'ona', label: 'Ona' },
      { value: 'special', label: 'Special' },
      { value: 'music', label: 'Music' },
    ],
  },
  {
    type: 'rating',
    value: 'Rating',
    options: [
      { value: '', label: 'Any' },
      { value: 'g', label: 'G' },
      { value: 'pg', label: 'PG' },
      { value: 'pg13', label: 'PG13' },
      { value: 'r17', label: 'R17' },
      { value: 'r', label: 'R' },
      { value: 'rx', label: 'RX' },
    ],
  },
  {
    type: 'status',
    value: 'Status',
    options: [
      { value: '', label: 'Any' },
      { value: 'airing', label: 'Airing' },
      { value: 'complete', label: 'Complete' },
      { value: 'upcoming', label: 'Upcoming' },
    ],
  },
  {
    type: 'order_by',
    value: 'Order by',
    options: [
      { value: '', label: 'Any' },
      { value: 'title', label: 'Title' },
      { value: 'type', label: 'Type' },
      { value: 'rating', label: 'Rating' },
      { value: 'popularity', label: 'Popularity' },
      { value: 'episodes', label: 'Episodes' },
    ],
  },
];
