import * as React from 'react';
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import rootSaga from './sagas';

class ReduxWithMidleware extends React.Component {
  constructor(props) {
    super(props);

    const sagaMiddleware = createSagaMiddleware();
    const middleware = [sagaMiddleware];
    const composeEnhancers =
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    this.store = createStore(
      rootReducer,
      undefined,
      composeEnhancers(applyMiddleware(...middleware))
    );
    sagaMiddleware.run(rootSaga);
  }
  store = null;
  render() {
    return <Provider store={this.store}>{this.props.children}</Provider>;
  }
}

export default ReduxWithMidleware;
