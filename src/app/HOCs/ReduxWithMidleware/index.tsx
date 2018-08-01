import React from 'react';
import { createStore, applyMiddleware, compose, Store } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';
import rootReducer, { State, Actions } from './reducers';
import rootSaga from './sagas';

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
  constructor(props: Props) {
    super(props);

    const sagaMiddleware = createSagaMiddleware();
    const middleware = [sagaMiddleware];
    const composeEnhancers =
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    this.store = createStore(
      rootReducer,
      {},
      composeEnhancers(applyMiddleware(...middleware))
    );
    sagaMiddleware.run(rootSaga);
  }
  render() {
    if (this.store == null) {
      return null;
    }
    return <Provider store={this.store}>{this.props.children}</Provider>;
  }
}

export default ReduxWithMidleware;
