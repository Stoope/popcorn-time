import React from 'react';
import { createStore, applyMiddleware, compose, Store } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';
import rootReducer, { State, Actions } from './reducers';
import rootSaga from './sagas';
import { createBrowserHistory, History } from 'history';
import { persistStore, persistReducer, Persistor } from 'redux-persist';
import { createWhitelistFilter } from 'redux-persist-transform-filter';
import { PersistGate } from 'redux-persist/integration/react';
import electronStoreStorage from './electron-store-storage';
import deepStateReconciler from './deep-state-reconciler';
import {
  connectRouter,
  routerMiddleware,
  ConnectedRouter
} from 'connected-react-router';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: any;
    require: any;
  }
}
type Props = {
  children: React.ReactElement<any>;
};

class ReduxWithMidleware extends React.Component<Props> {
  store: Store<State, Actions>;
  history: History = createBrowserHistory();
  persistConfig = {
    key: 'root',
    storage: electronStoreStorage,
    whitelist: ['settingsReducer'],
    stateReconciler: deepStateReconciler,
    transforms: [createWhitelistFilter('settingsReducer', ['config'])]
  };
  persistor: Persistor;
  constructor(props: Props) {
    super(props);

    const sagaMiddleware = createSagaMiddleware();
    const middleware = [routerMiddleware(this.history), sagaMiddleware];
    const composeEnhancers =
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    this.store = createStore(
      persistReducer(
        this.persistConfig,
        connectRouter(this.history)(rootReducer)
      ),
      {},
      composeEnhancers(applyMiddleware(...middleware))
    );
    this.persistor = persistStore(this.store);
    sagaMiddleware.run(rootSaga);
  }
  render() {
    return (
      <Provider store={this.store}>
        <PersistGate loading={null} persistor={this.persistor}>
          <ConnectedRouter history={this.history}>
            {this.props.children}
          </ConnectedRouter>
        </PersistGate>
      </Provider>
    );
  }
}

export default ReduxWithMidleware;
