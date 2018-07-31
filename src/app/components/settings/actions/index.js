import * as constants from '../constants';

export const closeSettings = () => ({
  type: constants.CLOSE_SETTINGS
});
export const openSettings = () => ({
  type: constants.OPEN_SETTINGS
});
export const changeSettings = payload => ({
  type: constants.CHANGE_SETTINGS,
  payload
});
export const saveSettings = () => ({
  type: constants.SAVE_SETTINGS
});
export const saveSettingsSuccess = () => ({
  type: constants.SAVE_SETTINGS_SUCCESS
});
export const saveSettingsError = payload => ({
  type: constants.SAVE_SETTINGS_ERROR,
  payload
});
export const loadSettings = () => ({
  type: constants.LOAD_SETTINGS
});
export const loadSettingsSuccess = payload => ({
  type: constants.LOAD_SETTINGS_SUCCESS,
  payload
});
export const loadSettingsError = payload => ({
  type: constants.LOAD_SETTINGS_ERROR,
  payload
});
