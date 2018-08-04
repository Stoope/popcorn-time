import { createStore, applyMiddleware, compose, Store } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer, { State, Actions } from './reducers';
import rootSaga from './sagas';
import { persistStore, persistReducer, Persistor } from 'redux-persist';
import { createWhitelistFilter } from 'redux-persist-transform-filter';
import electronStoreStorage from './electron-store-storage';
import deepStateReconciler from './deep-state-reconciler';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: any;
    require: any;
  }
}

const persistConfig = {
  key: 'config',
  storage: electronStoreStorage,
  whitelist: ['settingsReducer'],
  stateReconciler: deepStateReconciler,
  transforms: [createWhitelistFilter('settingsReducer', ['config'])]
};

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store: Store<State, Actions> = createStore(
  persistReducer(persistConfig, rootReducer),
  {},
  composeEnhancers(applyMiddleware(...middleware))
);
const persistor: Persistor = persistStore(store);
sagaMiddleware.run(rootSaga);

export default store;
export { persistor };
