import { all } from 'redux-saga/effects';
import _flatten from 'lodash/flatten';

import { settingsSagas } from '~/components/settings';

const composeSagas = (...sagas) =>
  _flatten(
    sagas.map(saga => [
      ...Object.keys(saga)
        .filter(key => typeof saga[key] === 'function')
        .map(func => saga[func]())
    ])
  );

function* rootSaga() {
  yield all(composeSagas(settingsSagas));
}

export default rootSaga;
