import * as generators from './generators';
import * as actions from '../actions';
import { cloneableGenerator } from 'redux-saga/utils';
import { put } from 'redux-saga/effects';

describe('shows reducer', () => {
  const generator = cloneableGenerator(generators.SHOWS_LOAD_SHOWS)(
    actions.loadShows(2)
  );
  generator.next();
  generator.next(false);

  it('should load shows on success (has not more pages)', () => {
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
    const clone = generator.clone();
    clone.next({});
    clone.next(['', '']);
    expect(clone.next(shows).value).toEqual(
      put(actions.loadShowsSuccess({ shows, hasMore: false }))
    );
  });

  it('should load shows on success (has more pages)', () => {
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
    const clone = generator.clone();
    clone.next({});
    clone.next(['', '', '']);
    expect(clone.next(shows).value).toEqual(
      put(actions.loadShowsSuccess({ shows, hasMore: true }))
    );
  });

  it('should end after load shows on success', () => {
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
    const clone = generator.clone();
    clone.next({});
    clone.next(['', '', '']);
    clone.next(shows);
    expect(clone.next().done).toEqual(true);
  });

  it('should load shows on error', () => {
    const clone = generator.clone();
    expect(clone.throw('ERROR').value).toEqual(
      put(actions.loadShowsError('ERROR'))
    );
  });

  it('should end on error', () => {
    const clone = generator.clone();
    clone.throw('ERROR');
    expect(clone.next().done).toEqual(true);
  });
});
