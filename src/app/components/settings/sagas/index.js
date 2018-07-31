import { takeLatest } from 'redux-saga/effects';

export function* watchLoadingNewsList() {
  yield takeLatest('constants.LOADING_NEWS_LIST', function*() {
    // try {
    //   yield put({ sasas: 3 });
    // } catch (error) {
    //   yield put({ sasas: 3 });
    // }
  });
}
