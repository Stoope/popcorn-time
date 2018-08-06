import { all, ForkEffect } from 'redux-saga/effects';
import flatten from 'lodash/flatten';

import { seriesSagas } from '~/components/series';

const composeSagas = (
  ...sagas: Array<{ [key: string]: () => IterableIterator<ForkEffect> }>
) =>
  flatten(
    sagas.map(saga => [
      ...Object.keys(saga)
        .filter(key => typeof saga[key] === 'function')
        .map(func => saga[func]())
    ])
  );

export default function* rootSaga() {
  yield all(composeSagas(seriesSagas));
}
