import { action } from 'typesafe-actions';
import * as constants from '../constants';
import { State } from 'types';

export const closeSettings = () => action(constants.CLOSE_SETTINGS);
export const openSettings = () => action(constants.OPEN_SETTINGS);
export const changeSettings = (
  payload: Partial<State['settingsReducer']['config']>
) => action(constants.CHANGE_SETTINGS, payload);
