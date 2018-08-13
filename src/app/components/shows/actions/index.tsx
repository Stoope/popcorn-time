import { action } from 'typesafe-actions';
import * as constants from '../constants';
import { State } from 'types';

export const loadShows = (payload: number) =>
  action(constants.LOAD_SHOWS, payload);
export const changeShowsScrollPosition = (payload: number) =>
  action(constants.CHANGE_SHOWS_SCROLL_POSITION, payload);
export const resetShows = () => action(constants.RESET_SHOWS);
export const loadShowsSuccess = (payload: {
  shows: State['showsReducer']['data'];
  hasMore: boolean;
}) => action(constants.LOAD_SHOWS_SUCCESS, payload);
export const loadShowsError = (payload: State['showsReducer']['error']) =>
  action(constants.LOAD_SHOWS_ERROR, payload);
export const changeShowsFilter = (payload: State['showsReducer']['filter']) =>
  action(constants.CHANGE_SHOWS_FILTER, payload);
