import React from 'react';
import { createStore, applyMiddleware, compose, Store } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';
import rootReducer, { State, Actions } from './reducers';
import rootSaga from './sagas';
import { createBrowserHistory, History } from 'history';
import {
  connectRouter,
  routerMiddleware,
  ConnectedRouter
} from 'connected-react-router';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: any;
  }
}
type Props = {
  children: React.ReactElement<any>;
};

class ReduxWithMidleware extends React.Component<Props> {
  store: Store<State, Actions> | null = null;
  history: History = createBrowserHistory();
  constructor(props: Props) {
    super(props);

    const sagaMiddleware = createSagaMiddleware();
    const middleware = [routerMiddleware(this.history), sagaMiddleware];
    const composeEnhancers =
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    this.store = createStore(
      connectRouter(this.history)(rootReducer),
      {},
      composeEnhancers(applyMiddleware(...middleware))
    );
    sagaMiddleware.run(rootSaga);
  }
  render() {
    if (this.store == null) {
      return null;
    }
    return (
      <Provider store={this.store}>
        <ConnectedRouter history={this.history}>
          {this.props.children}
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default ReduxWithMidleware;
