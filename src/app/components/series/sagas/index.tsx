import { takeLatest, select, call, put, takeEvery } from 'redux-saga/effects';
import * as constants from '../constants';
import * as actions from '../actions';
import { ActionType } from 'typesafe-actions';
import { State } from 'types';
import popcornAPIShowsProvider from '~/providers/popcornAPI/shows';

export function* SERIES_LOAD_SERIES() {
  yield takeEvery(constants.LOAD_SERIES, function*({
    payload
  }: ActionType<typeof actions.loadSeries>) {
    try {
      const proxy = yield select(
        (props: State) => props.settingsReducer.config.proxy
      );
      const filter = yield select((props: State) => props.seriesReducer.filter);
      const pages = yield call(popcornAPIShowsProvider.getPages);
      const data = yield call(
        popcornAPIShowsProvider.getPage,
        {
          page: payload,
          ...filter
        },
        proxy
      );
      yield put(
        actions.loadSeriesSuccess({
          series: data,
          hasMore: payload < pages.length
        })
      );
    } catch (error) {
      yield put(actions.loadSeriesError(error));
    }
  });
}
