import { select, call, put } from 'redux-saga/effects';
import * as actions from '../actions';
import { ActionType } from 'typesafe-actions';
import { State } from 'types';
import popcornAPIShowsProvider from '~/providers/popcornAPI/shows';
import { memoizePromise } from '~/helpers/memoize';

const getPage = memoizePromise(popcornAPIShowsProvider.getPage);
const getPages = memoizePromise(popcornAPIShowsProvider.getPages);

export function* SERIES_LOAD_SERIES({
  payload
}: ActionType<typeof actions.loadSeries>) {
  try {
    const proxy = yield select(
      (props: State) => props.settingsReducer.config.proxy
    );
    const filter = yield select((props: State) => props.seriesReducer.filter);
    const pages = yield call(getPages);
    const data = yield call(
      getPage,
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
}
