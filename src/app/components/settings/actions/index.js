// @flow
import type { Config } from '../reducer';
import {
  SAVE_SETTINGS,
  SAVE_SETTINGS_SUCCESS,
  SAVE_SETTINGS_ERROR,
  LOAD_SETTINGS,
  LOAD_SETTINGS_SUCCESS,
  LOAD_SETTINGS_ERROR,
  CHANGE_SETTINGS
} from '../constants';

type LoadSettings = { +type: typeof LOAD_SETTINGS };
type LoadSettingsSuccess = {
  +type: typeof LOAD_SETTINGS_SUCCESS,
  payload: Config
};
type LoadSettingsError = {
  +type: typeof LOAD_SETTINGS_ERROR,
  payload: string
};
type ChangeSettings = { +type: typeof CHANGE_SETTINGS, payload: Config };
type SaveSettings = { +type: typeof SAVE_SETTINGS };
type SaveSettingsSuccess = {
  +type: typeof SAVE_SETTINGS_SUCCESS
};
type SaveSettingsError = {
  +type: typeof SAVE_SETTINGS_ERROR,
  payload: string
};

export type Action =
  | SaveSettings
  | SaveSettingsSuccess
  | SaveSettingsError
  | LoadSettings
  | LoadSettingsSuccess
  | LoadSettingsError
  | ChangeSettings;

export const changeSettings = (payload: Config): ChangeSettings => ({
  type: CHANGE_SETTINGS,
  payload
});
export const saveSettings = (): SaveSettings => ({
  type: SAVE_SETTINGS
});
export const saveSettingsSuccess = (): SaveSettingsSuccess => ({
  type: SAVE_SETTINGS_SUCCESS
});
export const saveSettingsError = (payload: string): SaveSettingsError => ({
  type: SAVE_SETTINGS_ERROR,
  payload
});
export const loadSettings = (): LoadSettings => ({
  type: LOAD_SETTINGS
});
export const loadSettingsSuccess = (payload: Config): LoadSettingsSuccess => ({
  type: LOAD_SETTINGS,
  payload
});
export const loadSettingsError = (payload: string): LoadSettingsError => ({
  type: LOAD_SETTINGS_ERROR,
  payload
});
