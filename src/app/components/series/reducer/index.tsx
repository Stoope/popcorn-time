import * as constants from '../constants';
import { State as GlobalState, Actions } from 'types';

export type State = {
  readonly isLoading: boolean;
  readonly filter: {
    page?: number;
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
};

const initialState: GlobalState['seriesReducer'] = {
  isLoading: false,
  filter: {
    page: 1,
    sort: 'rating',
    order: -1
  },
  data: [],
  error: null
};

const reducer = (
  state: GlobalState['seriesReducer'] = initialState,
  action: Actions
): GlobalState['seriesReducer'] => {
  switch (action.type) {
    case constants.LOAD_SERIES:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case constants.RESET_SERIES:
      return {
        ...initialState
      };
    case constants.CHANGE_SERIES_FILTER:
      return {
        ...state,
        filter: { ...state.filter, ...action.payload }
      };
    case constants.LOAD_SERIES_ERROR:
      return {
        ...state,
        error: action.payload
      };
    case constants.LOAD_SERIES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: [
          ...state.data.filter(
            ({ _id }) =>
              action.payload.find(item => item._id === _id) === undefined
          ),
          ...action.payload
        ]
      };
    default:
      return state;
  }
};

export default reducer;
