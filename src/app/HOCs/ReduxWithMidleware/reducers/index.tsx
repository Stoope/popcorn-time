import { combineReducers } from 'redux';
import { ActionType } from 'typesafe-actions';
import {
  settingsReducer,
  SettingsState,
  settingsActions
} from '~/components/settings';
import { drawerReducer, DrawerState, drawerActions } from '~/components/drawer';

export type Actions =
  | ActionType<typeof settingsActions>
  | ActionType<typeof drawerActions>
  | { type: null };
export type State = {
  settingsReducer: SettingsState;
  drawerReducer: DrawerState;
};

const reducers = {
  settingsReducer,
  drawerReducer
};

export default combineReducers<State, Actions>(reducers);
