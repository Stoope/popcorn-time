import { select, call, put } from 'redux-saga/effects';
import * as actions from '../actions';
import { ActionType } from 'typesafe-actions';
import { State } from 'types';
import popcornAPIShowsProvider from '~/providers/popcornAPI/shows';
import { memoizePromise } from '~/helpers/memoize';

const getPage = memoizePromise(popcornAPIShowsProvider.getPage);
const getPages = memoizePromise(popcornAPIShowsProvider.getPages);

export function* SHOWS_LOAD_SHOWS({
  payload
}: ActionType<typeof actions.loadShows>) {
  try {
    const proxy = yield select(
      (props: State) => props.settingsReducer.config.proxy
    );
    const filter = yield select((props: State) => props.showsReducer.filter);
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
      actions.loadShowsSuccess({
        shows: data,
        hasMore: payload < pages.length
      })
    );
  } catch (error) {
    yield put(actions.loadShowsError(error));
  }
}
