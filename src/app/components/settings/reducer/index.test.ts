import reducer from './';
import * as constants from '../constants';

describe('settings reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, { type: null })).toEqual({
      config: { theme: { type: 'dark', fontSize: '18px' } },
      isLoading: false,
      isSaving: false,
      error: null,
      isSettingsOpen: false
    });
  });
  it('should handle SAVE_SETTINGS_ERROR', () => {
    const testError = 'test error';
    expect(
      reducer(undefined, {
        type: constants.SAVE_SETTINGS_ERROR,
        payload: testError
      })
    ).toMatchObject({ error: testError });
  });
  it('should handle LOAD_SETTINGS_ERROR', () => {
    const testError = 'test error';
    expect(
      reducer(undefined, {
        type: constants.LOAD_SETTINGS_ERROR,
        payload: testError
      })
    ).toMatchObject({ error: testError });
  });
  it('should handle LOAD_SETTINGS_SUCCESS', () => {
    const config = { theme: { fontSize: '55px' } };
    expect(
      reducer(
        { isLoading: true },
        {
          type: constants.LOAD_SETTINGS_SUCCESS,
          payload: config
        }
      )
    ).toMatchObject({ config: config, isLoading: false });
  });
  it('should handle SAVE_SETTINGS_SUCCESS', () => {
    expect(
      reducer(
        { isSaving: true },
        {
          type: constants.SAVE_SETTINGS_SUCCESS
        }
      )
    ).toMatchObject({ isSaving: false });
  });
  it('should handle LOAD_SETTINGS', () => {
    expect(
      reducer(
        { isLoading: false },
        {
          type: constants.LOAD_SETTINGS
        }
      )
    ).toMatchObject({ isLoading: true });
  });
  it('should handle SAVE_SETTINGS', () => {
    expect(
      reducer(
        { isSaving: false },
        {
          type: constants.SAVE_SETTINGS
        }
      )
    ).toMatchObject({ isSaving: true });
  });
  it('should handle CHANGE_SETTINGS', () => {
    expect(
      reducer(
        { config: { theme: { fontSize: '18px', type: 'light' } } },
        {
          type: constants.CHANGE_SETTINGS,
          payload: { theme: { fontSize: '55px' } }
        }
      )
    ).toMatchObject({ config: { theme: { fontSize: '55px', type: 'light' } } });
  });
  it('should handle OPEN_SETTINGS', () => {
    expect(
      reducer(undefined, {
        type: constants.OPEN_SETTINGS
      })
    ).toMatchObject({ isSettingsOpen: true });
  });
  it('should handle CLOSE_SETTINGS', () => {
    expect(
      reducer(
        { isSettingsOpen: true },
        {
          type: constants.CLOSE_SETTINGS
        }
      )
    ).toMatchObject({ isSettingsOpen: false });
  });
});
