import settingsReducer, { State as SettingsState } from './reducer';
import * as settingsSagas from './sagas';
import SettingsComponent from './Component';
import * as settingsActions from './actions';

export {
  settingsReducer,
  settingsSagas,
  SettingsComponent,
  settingsActions,
  SettingsState
};