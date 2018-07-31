// @flow
import type { Config } from '../reducer';
import * as constants from '../constants';

type LoadSettings = { +type: typeof constants.LOAD_SETTINGS };
type LoadSettingsSuccess = {
  +type: typeof constants.LOAD_SETTINGS_SUCCESS,
  payload: Config
};
type LoadSettingsError = {
  +type: typeof constants.LOAD_SETTINGS_ERROR,
  payload: string
};
type ChangeSettings = {
  +type: typeof constants.CHANGE_SETTINGS,
  payload: Config
};
type SaveSettings = { +type: typeof constants.SAVE_SETTINGS };
type SaveSettingsSuccess = {
  +type: typeof constants.SAVE_SETTINGS_SUCCESS
};
type SaveSettingsError = {
  +type: typeof constants.SAVE_SETTINGS_ERROR,
  payload: string
};
type OpenSettings = {
  +type: typeof constants.OPEN_SETTINGS
};
type CloseSettings = {
  +type: typeof constants.CLOSE_SETTINGS
};

export type Action =
  | SaveSettings
  | SaveSettingsSuccess
  | SaveSettingsError
  | LoadSettings
  | LoadSettingsSuccess
  | LoadSettingsError
  | ChangeSettings
  | OpenSettings
  | CloseSettings;

export const closeSettings = (): CloseSettings => ({
  type: constants.CLOSE_SETTINGS
});
export const openSettings = (): OpenSettings => ({
  type: constants.OPEN_SETTINGS
});
export const changeSettings = (payload: Config): ChangeSettings => ({
  type: constants.CHANGE_SETTINGS,
  payload
});
export const saveSettings = (): SaveSettings => ({
  type: constants.SAVE_SETTINGS
});
export const saveSettingsSuccess = (): SaveSettingsSuccess => ({
  type: constants.SAVE_SETTINGS_SUCCESS
});
export const saveSettingsError = (payload: string): SaveSettingsError => ({
  type: constants.SAVE_SETTINGS_ERROR,
  payload
});
export const loadSettings = (): LoadSettings => ({
  type: constants.LOAD_SETTINGS
});
export const loadSettingsSuccess = (payload: Config): LoadSettingsSuccess => ({
  type: constants.LOAD_SETTINGS_SUCCESS,
  payload
});
export const loadSettingsError = (payload: string): LoadSettingsError => ({
  type: constants.LOAD_SETTINGS_ERROR,
  payload
});
