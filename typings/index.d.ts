declare module '*.json' {
  const value: any;
  export default value;
}

declare type Filter = {
  sort?: 'name' | 'rating' | 'trending' | 'updated' | 'year';
  order?: 1 | -1;
  genre?:
    | 'all'
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
