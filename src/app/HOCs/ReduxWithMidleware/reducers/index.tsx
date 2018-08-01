import { combineReducers } from 'redux';
import { ActionType } from 'typesafe-actions';
import {
  settingsReducer,
  SettingsState,
  settingsActions
} from '~/components/settings';

export type Actions = ActionType<typeof settingsActions> | { type: null };
export type State = { settingsReducer: SettingsState };

const reducers = {
  settingsReducer
};

export default combineReducers<State, Actions>(reducers);
