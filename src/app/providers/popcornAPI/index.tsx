import shows from './shows';

export type Filter = {
  page: number;
  sort?: 'name' | 'rating' | 'trending' | 'updated' | 'year';
  order?: 1 | -1;
  genre?:
    | 'action'
    | 'adventure'
    | 'animation'
    | 'comedy'
    | 'crime'
    | 'disaster'
    | 'documentary'
    | 'drama'
    | 'eastern'
    | 'family'
    | 'fan-film'
    | 'fantasy'
    | 'film-noir'
    | 'history'
    | 'holiday'
    | 'horror'
    | 'indie'
    | 'music'
    | 'mystery'
    | 'none'
    | 'road'
    | 'romance'
    | 'science-fiction'
    | 'short'
    | 'sports'
    | 'sporting-event'
    | 'suspense'
    | 'thriller'
    | 'tv-movie'
    | 'war'
    | 'western';
  keywords?: string;
};

export { shows };
