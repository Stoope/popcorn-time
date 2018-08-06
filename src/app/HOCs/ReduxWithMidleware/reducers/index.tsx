import { combineReducers } from 'redux';
import { ActionType } from 'typesafe-actions';
import {
  settingsReducer,
  SettingsState,
  settingsActions
} from '~/components/settings';
import { drawerReducer, DrawerState, drawerActions } from '~/components/drawer';
import { seriesReducer, SeriesState, seriesActions } from '~/components/series';

export type Actions =
  | ActionType<typeof settingsActions>
  | ActionType<typeof drawerActions>
  | ActionType<typeof seriesActions>
  | { type: null };
export type State = {
  settingsReducer: SettingsState;
  drawerReducer: DrawerState;
  seriesReducer: SeriesState;
};

const reducers = {
  settingsReducer,
  drawerReducer,
  seriesReducer
};

export default combineReducers<State, Actions>(reducers);
