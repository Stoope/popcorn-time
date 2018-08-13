import { combineReducers } from 'redux';
import { ActionType } from 'typesafe-actions';
import {
  settingsReducer,
  SettingsState,
  settingsActions
} from '~/components/settings';
import { drawerReducer, DrawerState, drawerActions } from '~/components/drawer';
import { showsReducer, ShowsState, showsActions } from '~/components/shows';

export type Actions =
  | ActionType<typeof settingsActions>
  | ActionType<typeof drawerActions>
  | ActionType<typeof showsActions>
  | { type: null };
export type State = {
  settingsReducer: SettingsState;
  drawerReducer: DrawerState;
  showsReducer: ShowsState;
};

const reducers = {
  settingsReducer,
  drawerReducer,
  showsReducer
};

export default combineReducers<State, Actions>(reducers);
