// @flow
import settingsReducer from './reducer';
import * as settingsSagas from './sagas';
import SettingsComponent from './Component';
import * as settingsActions from './actions';
export type { Config } from './reducer';
export type { Theme } from './reducer';

export { settingsReducer, settingsSagas, SettingsComponent, settingsActions };
