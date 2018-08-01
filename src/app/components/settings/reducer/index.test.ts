import reducer from './';
import * as constants from '../constants';

describe('settings reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, { type: null })).toEqual({
      config: { theme: { typography: { htmlFontSize: 16 } }, locale: 'en' },
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
    const config = { theme: { typography: { fontSize: 55 } } };
    const initialState = reducer(undefined, { type: null });
    expect(
      reducer(
        { ...initialState, isLoading: true },
        {
          type: constants.LOAD_SETTINGS_SUCCESS,
          payload: config
        }
      )
    ).toMatchObject({ config: config, isLoading: false });
  });
  it('should handle SAVE_SETTINGS_SUCCESS', () => {
    const initialState = reducer(undefined, { type: null });
    expect(
      reducer(
        { ...initialState, isSaving: true },
        {
          type: constants.SAVE_SETTINGS_SUCCESS
        }
      )
    ).toMatchObject({ isSaving: false });
  });
  it('should handle LOAD_SETTINGS', () => {
    const initialState = reducer(undefined, { type: null });
    expect(
      reducer(
        { ...initialState, isLoading: false },
        {
          type: constants.LOAD_SETTINGS
        }
      )
    ).toMatchObject({ isLoading: true });
  });
  it('should handle SAVE_SETTINGS', () => {
    const initialState = reducer(undefined, { type: null });
    expect(
      reducer(
        { ...initialState, isSaving: false },
        {
          type: constants.SAVE_SETTINGS
        }
      )
    ).toMatchObject({ isSaving: true });
  });
  it('should handle CHANGE_SETTINGS', () => {
    const initialState = reducer(undefined, { type: null });
    expect(
      reducer(
        {
          ...initialState,
          config: {
            theme: { typography: { fontSize: 55, htmlFontSize: 55 } },
            locale: 'en'
          }
        },
        {
          type: constants.CHANGE_SETTINGS,
          payload: { theme: { typography: { fontSize: 5 } } }
        }
      )
    ).toMatchObject({
      config: { theme: { typography: { fontSize: 5, htmlFontSize: 55 } } }
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
