import { takeEvery } from 'redux-saga/effects';
import * as constants from '../constants';
import * as generators from './generators';

export function* SERIES_LOAD_SERIES() {
  yield takeEvery(constants.LOAD_SERIES, generators.SERIES_LOAD_SERIES);
}
