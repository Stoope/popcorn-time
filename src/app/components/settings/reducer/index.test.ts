import reducer from './';
import * as constants from '../constants';

describe('settings reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, { type: null })).toEqual({
      config: {
        theme: { typography: { htmlFontSize: 16 } },
        locale: 'en',
        proxy: false,
        shows: {
          APIs: [
            {
              url: 'http://eztv.is/api/'
            },
            {
              url: 'https://api-fetch.website/tv/'
            },
            {
              url: 'https://eztvapi.ml/'
            },
            {
              url: 'https://popcorntime.ws/api/eztv/'
            },
            {
              url: 'https://popcorntimece.ch/api/eztv/'
            }
          ]
        }
      },
      isSettingsOpen: false
    });
  });
  it('should handle CHANGE_SETTINGS', () => {
    const initialState = reducer(undefined, { type: null });
    expect(
      reducer(
        {
          ...initialState,
          config: {
            ...initialState.config,
            theme: { typography: { htmlFontSize: 16 } }
          }
        },
        {
          type: constants.CHANGE_SETTINGS,
          payload: { theme: { typography: { fontSize: 5 } } }
        }
      )
    ).toMatchObject({
      config: { theme: { typography: { fontSize: 5, htmlFontSize: 16 } } }
    });
  });
  it('should handle OPEN_SETTINGS', () => {
    expect(
      reducer(undefined, {
        type: constants.OPEN_SETTINGS
      })
    ).toMatchObject({ isSettingsOpen: true });
  });
  it('should handle CLOSE_SETTINGS', () => {
    const initialState = reducer(undefined, { type: null });
    expect(
      reducer(
        {
          ...initialState,
          isSettingsOpen: true
        },
        {
          type: constants.CLOSE_SETTINGS
        }
      )
    ).toMatchObject({ isSettingsOpen: false });
  });
});
