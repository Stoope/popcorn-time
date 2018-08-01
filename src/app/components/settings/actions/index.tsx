import { action } from 'typesafe-actions';
import * as constants from '../constants';
import { State } from '~types';

export const closeSettings = () => action(constants.CLOSE_SETTINGS);
export const openSettings = () => action(constants.OPEN_SETTINGS);
export const changeSettings = (payload: State['settingsReducer']['config']) =>
  action(constants.CHANGE_SETTINGS, payload);
export const saveSettings = () => action(constants.SAVE_SETTINGS);
export const saveSettingsSuccess = () =>
  action(constants.SAVE_SETTINGS_SUCCESS);
export const saveSettingsError = (payload: string) =>
  action(constants.SAVE_SETTINGS_ERROR, payload);
export const loadSettings = () => action(constants.LOAD_SETTINGS);
export const loadSettingsSuccess = (
  payload: State['settingsReducer']['config']
) => action(constants.LOAD_SETTINGS_SUCCESS, payload);
export const loadSettingsError = (payload: string) =>
  action(constants.LOAD_SETTINGS_ERROR, payload);
