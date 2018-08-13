import { takeEvery } from 'redux-saga/effects';
import * as constants from '../constants';
import * as generators from './generators';

export function* SHOWS_LOAD_SHOWS() {
  yield takeEvery(constants.LOAD_SHOWS, generators.SHOWS_LOAD_SHOWS);
}
