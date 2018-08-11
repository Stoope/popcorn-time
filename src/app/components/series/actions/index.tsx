import { action } from 'typesafe-actions';
import * as constants from '../constants';
import { State } from 'types';

export const loadSeries = (payload: number) =>
  action(constants.LOAD_SERIES, payload);
export const changeSeriesScrollPosition = (payload: number) =>
  action(constants.CHANGE_SERIES_SCROLL_POSITION, payload);
export const resetSeries = () => action(constants.RESET_SERIES);
export const loadSeriesSuccess = (payload: {
  series: State['seriesReducer']['data'];
  hasMore: boolean;
}) => action(constants.LOAD_SERIES_SUCCESS, payload);
export const loadSeriesError = (payload: State['seriesReducer']['error']) =>
  action(constants.LOAD_SERIES_ERROR, payload);
export const changeSeriesFilter = (payload: State['seriesReducer']['filter']) =>
  action(constants.CHANGE_SERIES_FILTER, payload);
