import { takeLatest, put } from 'redux-saga/effects';

export function* watchLoadingNewsList() {
  yield takeLatest('constants.LOADING_NEWS_LIST', function*() {
    try {
      yield put({ type: 3 });
    } catch (error) {
      yield put({ type: 3 });
    }
  });
}
