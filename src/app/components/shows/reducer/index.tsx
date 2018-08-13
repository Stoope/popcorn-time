import * as constants from '../constants';
import { State as GlobalState, Actions } from 'types';

export type State = {
  readonly isLoading: boolean;
  readonly filter: {
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
  data: Array<{
    _id: string;
    imdb_id: string;
    tvdb_id: string;
    title: string;
    year: string;
    slug: string;
    num_seasons: number;
    images: {
      poster: string;
      fanart: string;
      banner: string;
    };
    rating: {
      percentage: number;
      watching: number;
      votes: number;
      loved: number;
      hated: number;
    };
  }>;
  error: string | null;
  hasMore: boolean;
  scrollTopPosition: number;
};

const initialState: GlobalState['showsReducer'] = {
  isLoading: false,
  filter: {
    sort: 'rating',
    order: -1
  },
  data: [],
  error: null,
  scrollTopPosition: 0,
  hasMore: true
};

const reducer = (
  state: GlobalState['showsReducer'] = initialState,
  action: Actions
): GlobalState['showsReducer'] => {
  switch (action.type) {
    case constants.LOAD_SHOWS:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case constants.RESET_SHOWS:
      return {
        ...initialState
      };
    case constants.CHANGE_SHOWS_FILTER:
      return {
        ...state,
        filter: { ...state.filter, ...action.payload },
        data: []
      };
    case constants.LOAD_SHOWS_ERROR:
      return {
        ...state,
        error: action.payload,
        data: [],
        hasMore: false
      };
    case constants.CHANGE_SHOWS_SCROLL_POSITION:
      return {
        ...state,
        scrollTopPosition: action.payload
      };
    case constants.LOAD_SHOWS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: [
          ...state.data.filter(
            ({ _id }) =>
              action.payload.shows.find(item => item._id === _id) === undefined
          ),
          ...action.payload.shows
        ],
        hasMore: action.payload.hasMore
      };
    default:
      return state;
  }
};

export default reducer;
