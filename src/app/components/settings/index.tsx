import * as settingsActions from './actions';
import settingsReducer, { State as SettingsState } from './reducer';
import * as settingsSagas from './sagas';
import SettingsComponent from './Component';

export {
  settingsReducer,
  settingsSagas,
  SettingsComponent,
  settingsActions,
  SettingsState
};
