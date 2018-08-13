import reducer from './';
import * as constants from '../constants';

describe('shows reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, { type: null })).toEqual({
      isLoading: false,
      filter: {
        sort: 'rating',
        order: -1
      },
      data: [],
      error: null,
      scrollTopPosition: 0,
      hasMore: true
    });
  });
  it('should handle CHANGE_SHOWS_SCROLL_POSITION', () => {
    expect(
      reducer(
        {
          isLoading: false,
          filter: {
            sort: 'name',
            order: -1
          },
          data: [],
          error: 'ERROR',
          hasMore: false,
          scrollTopPosition: 0
        },
        {
          type: constants.CHANGE_SHOWS_SCROLL_POSITION,
          payload: 10
        }
      )
    ).toMatchObject({
      scrollTopPosition: 10
    });
  });
  it('should handle LOAD_SHOWS', () => {
    expect(
      reducer(
        {
          isLoading: false,
          filter: {
            sort: 'name',
            order: -1
          },
          data: [],
          error: 'ERROR',
          hasMore: false
        },
        {
          type: constants.LOAD_SHOWS,
          payload: 10
        }
      )
    ).toMatchObject({
      isLoading: true,
      error: null,
      hasMore: false
    });
  });
  it('should handle RESET_SHOWS', () => {
    expect(
      reducer(
        {
          isLoading: false,
          filter: {
            sort: 'name',
            order: -1
          },
          data: [],
          error: 'ERROR',
          hasMore: false
        },
        {
          type: constants.RESET_SHOWS
        }
      )
    ).toEqual(
      reducer(undefined, {
        type: ''
      })
    );
  });
  it('should handle LOAD_SHOWS_SUCCESS', () => {
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
    const initialState = reducer(undefined, { type: null });
    expect(
      reducer(
        {
          ...initialState,
          isLoading: true
        },
        {
          type: constants.LOAD_SHOWS_SUCCESS,
          payload: { shows, hasMore: true }
        }
      )
    ).toMatchObject({
      isLoading: false,
      data: shows,
      hasMore: true
    });
  });
  it('should handle LOAD_SHOWS_SUCCESS add to exist data', () => {
    const existShows = [
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
      }
    ];
    const shows = [
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
    expect(
      reducer(
        {
          isLoading: false,
          filter: {
            sort: 'rating',
            order: -1
          },
          data: [...existShows],
          error: null,
          hasMore: false
        },
        {
          type: constants.LOAD_SHOWS_SUCCESS,
          payload: {
            shows,
            hasMore: true
          }
        }
      )
    ).toMatchObject({
      data: [...existShows, ...shows],
      hasMore: true
    });
  });
  it('should handle LOAD_SHOWS_SUCCESS remove duplicates', () => {
    const existShows = [
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
    const shows = [
      {
        _id: 'tt4272070',
        imdb_id: 'tt4272070',
        tvdb_id: '287572',
        title: `Fast N' Loud: Demolition TheaterNEW`,
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
      }
    ];
    expect(
      reducer(
        {
          isLoading: false,
          filter: {
            sort: 'rating',
            order: -1
          },
          data: [...existShows],
          error: null,
          hasMore: false
        },
        {
          type: constants.LOAD_SHOWS_SUCCESS,
          payload: {
            shows,
            hasMore: true
          }
        }
      )
    ).toMatchObject({
      data: [
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
        },
        ...shows
      ],
      hasMore: true
    });
  });
  it('should handle LOAD_SHOWS_ERROR', () => {
    const error = 'ERROR';
    expect(
      reducer(
        {
          isLoading: false,
          filter: {
            sort: 'rating',
            order: -1
          },
          data: [
            {
              _id: 'tt4272070',
              imdb_id: 'tt4272070',
              tvdb_id: '287572',
              title: `Fast N' Loud: Demolition TheaterNEW`,
              year: '2014',
              slug: 'fast-n-loud-demolition-theater',
              num_seasons: 1,
              images: {
                poster: 'http://thetvdb.com/banners/posters/287572-1.jpg',
                fanart:
                  'http://thetvdb.com/banners/fanart/original/287572-1.jpg',
                banner: 'http://thetvdb.com/banners/graphical/287572-g.jpg'
              },
              rating: {
                percentage: 100,
                watching: 0,
                votes: 4,
                loved: 100,
                hated: 100
              }
            }
          ],
          error: null,
          hasMore: true
        },
        {
          type: constants.LOAD_SHOWS_ERROR,
          payload: error
        }
      )
    ).toMatchObject({
      error,
      data: [],
      hasMore: false
    });
  });
  it('should handle CHANGE_SHOWS_FILTER', () => {
    const filter = { keywords: 'SHOW', page: 10 };
    expect(
      reducer(
        {
          isLoading: false,
          filter: {
            sort: 'rating',
            order: -1
          },
          data: [
            {
              _id: 'tt4272070',
              imdb_id: 'tt4272070',
              tvdb_id: '287572',
              title: `Fast N' Loud: Demolition TheaterNEW`,
              year: '2014',
              slug: 'fast-n-loud-demolition-theater',
              num_seasons: 1,
              images: {
                poster: 'http://thetvdb.com/banners/posters/287572-1.jpg',
                fanart:
                  'http://thetvdb.com/banners/fanart/original/287572-1.jpg',
                banner: 'http://thetvdb.com/banners/graphical/287572-g.jpg'
              },
              rating: {
                percentage: 100,
                watching: 0,
                votes: 4,
                loved: 100,
                hated: 100
              }
            }
          ],
          error: null,
          hasMore: false
        },
        {
          type: constants.CHANGE_SHOWS_FILTER,
          payload: filter
        }
      )
    ).toMatchObject({
      filter: {
        page: 10,
        keywords: 'SHOW',
        order: -1
      },
      data: []
    });
  });
});
