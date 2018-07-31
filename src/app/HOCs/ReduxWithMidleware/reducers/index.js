// @flow
import { combineReducers } from 'redux';
import { settingsReducer } from '~/components/settings';

const reducers = {
  settingsReducer
};
export type Reducers = typeof reducers;

export default combineReducers(reducers);
