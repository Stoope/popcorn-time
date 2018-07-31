import reducer from './';
import * as constants from '../constants';

describe('settings reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
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
    expect(
      reducer(
        { isLoading: true },
        {
          type: constants.LOAD_SETTINGS_SUCCESS,
          payload: { test: 'TEST' }
        }
      )
    ).toMatchObject({ config: { test: 'TEST' }, isLoading: false });
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
        { config: { test: { a: 5, b: 6 } } },
        {
          type: constants.CHANGE_SETTINGS,
          payload: { test: { b: 10 } }
        }
      )
    ).toMatchObject({ config: { test: { a: 5, b: 10 } } });
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
