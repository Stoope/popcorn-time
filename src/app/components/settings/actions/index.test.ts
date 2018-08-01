import * as actions from './';
import * as types from '../constants';

describe('actions', () => {
  it('should create an action CLOSE_SETTINGS', () => {
    const expectedAction = {
      type: types.CLOSE_SETTINGS
    };
    expect(actions.closeSettings()).toEqual(expectedAction);
  });
  it('should create an action OPEN_SETTINGS', () => {
    const expectedAction = {
      type: types.OPEN_SETTINGS
    };
    expect(actions.openSettings()).toEqual(expectedAction);
  });
  it('should create an action CHANGE_SETTINGS', () => {
    const payload = { theme: { fontSize: '18px' } };
    const expectedAction = {
      type: types.CHANGE_SETTINGS,
      payload
    };
    expect(actions.changeSettings(payload)).toEqual(expectedAction);
  });
  it('should create an action SAVE_SETTINGS', () => {
    const expectedAction = {
      type: types.SAVE_SETTINGS
    };
    expect(actions.saveSettings()).toEqual(expectedAction);
  });
  it('should create an action SAVE_SETTINGS_SUCCESS', () => {
    const expectedAction = {
      type: types.SAVE_SETTINGS_SUCCESS
    };
    expect(actions.saveSettingsSuccess()).toEqual(expectedAction);
  });
  it('should create an action CLOSE_SETTINGS', () => {
    const expectedAction = {
      type: types.CLOSE_SETTINGS
    };
    expect(actions.closeSettings()).toEqual(expectedAction);
  });
  it('should create an action SAVE_SETTINGS_ERROR', () => {
    const payload = 'Error!!!';
    const expectedAction = {
      type: types.SAVE_SETTINGS_ERROR,
      payload
    };
    expect(actions.saveSettingsError(payload)).toEqual(expectedAction);
  });
  it('should create an action LOAD_SETTINGS', () => {
    const expectedAction = {
      type: types.LOAD_SETTINGS
    };
    expect(actions.loadSettings()).toEqual(expectedAction);
  });
  it('should create an action LOAD_SETTINGS_SUCCESS', () => {
    const payload = { theme: { fontSize: '18px' } };
    const expectedAction = {
      type: types.LOAD_SETTINGS_SUCCESS,
      payload
    };
    expect(actions.loadSettingsSuccess(payload)).toEqual(expectedAction);
  });
  it('should create an action LOAD_SETTINGS_ERROR', () => {
    const payload = 'Error!!!';
    const expectedAction = {
      type: types.LOAD_SETTINGS_ERROR,
      payload
    };
    expect(actions.loadSettingsError(payload)).toEqual(expectedAction);
  });
});
