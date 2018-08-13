import * as actions from './';
import * as types from '../constants';

describe('actions', () => {
  it('should create an action LOAD_SHOWS', () => {
    const expectedAction = {
      type: types.LOAD_SHOWS,
      payload: 10
    };
    expect(actions.loadShows(10)).toEqual(expectedAction);
  });
  it('should create an action LOAD_SHOWS_SUCCESS', () => {
    const shows = [
      {
        _id: 'tt4272070',
        imdb_id: 'tt4272070',
        tvdb_id: '287572',
        title: `Fast N' Loud: Demolition Theater`,
        year: '2014',
        slug: 'fast-n-loud-demolition-theater',
        num_seasons: 1,
        images: {
          poster: 'http://thetvdb.com/banners/posters/287572-1.jpg',
          fanart: 'http://thetvdb.com/banners/fanart/original/287572-1.jpg',
          banner: 'http://thetvdb.com/banners/graphical/287572-g.jpg'
        },
        rating: {
          percentage: 100,
          watching: 0,
          votes: 4,
          loved: 100,
          hated: 100
        }
      },
      {
        _id: 'tt7949730',
        imdb_id: 'tt7949730',
        tvdb_id: '341613',
        title: 'Black Card Revoked',
        year: '2018',
        slug: 'black-card-revoked',
        num_seasons: 1,
        images: {
          poster:
            'http://image.tmdb.org/t/p/w500/oxiNnOqwVdPylklDLALPM3grKJM.jpg',
          fanart:
            'http://image.tmdb.org/t/p/w500/vWdY4rCv5j4cTwcOBOIeZnnha9G.jpg',
          banner:
            'http://image.tmdb.org/t/p/w500/oxiNnOqwVdPylklDLALPM3grKJM.jpg'
        },
        rating: {
          percentage: 100,
          watching: 0,
          votes: 2,
          loved: 100,
          hated: 100
        }
      }
    ];
    const expectedAction = {
      type: types.LOAD_SHOWS_SUCCESS,
      payload: { shows, hasMore: false }
    };
    expect(actions.loadShowsSuccess({ shows, hasMore: false })).toEqual(
      expectedAction
    );
  });
  it('should create an action LOAD_SHOWS_ERROR', () => {
    const error = 'error';
    const expectedAction = {
      type: types.LOAD_SHOWS_ERROR,
      payload: error
    };
    expect(actions.loadShowsError(error)).toEqual(expectedAction);
  });
  it('should create an action CHANGE_SHOWS_FILTER', () => {
    const filter = { keywords: 'AAA' };
    const expectedAction = {
      type: types.CHANGE_SHOWS_FILTER,
      payload: filter
    };
    expect(actions.changeShowsFilter(filter)).toEqual(expectedAction);
  });
  it('should create an action CHANGE_SHOWS_SCROLL_POSITION', () => {
    const expectedAction = {
      type: types.CHANGE_SHOWS_SCROLL_POSITION,
      payload: 5
    };
    expect(actions.changeShowsScrollPosition(5)).toEqual(expectedAction);
  });
  it('should create an action RESET_SHOWS', () => {
    const expectedAction = {
      type: types.RESET_SHOWS
    };
    expect(actions.resetShows()).toEqual(expectedAction);
  });
});
