// @flow
import type { Saga } from 'redux-saga';
import { all } from 'redux-saga/effects';
import _flatten from 'lodash/flatten';

import { settingsSagas } from '~/components/settings';

const composeSagas = (...sagas) =>
  _flatten(
    sagas.map((saga: Object) => [
      ...Object.keys(saga)
        .filter((key: string) => typeof saga[key] === 'function')
        .map((func: string) => saga[func]())
    ])
  );

function* rootSaga(): Saga<void> {
  yield all(composeSagas(settingsSagas));
}

export default rootSaga;
