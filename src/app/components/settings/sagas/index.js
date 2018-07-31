// @flow
import type { Saga, Effect } from 'redux-saga';
import { takeLatest } from 'redux-saga/effects';

export function* watchLoadingNewsList(): Iterable<Effect> {
  yield takeLatest('constants.LOADING_NEWS_LIST', function*(): Saga<void> {
    // try {
    //   yield put({ sasas: 3 });
    // } catch (error) {
    //   yield put({ sasas: 3 });
    // }
  });
}
