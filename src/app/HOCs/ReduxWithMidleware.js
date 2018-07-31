// @flow
import * as React from 'react';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from '../reducers';

type Props = { children?: React.Node };

class ReduxWithMidleware extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
    const middleware = [];
    const composeEnhancers =
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    this.store = createStore(
      rootReducer,
      undefined,
      composeEnhancers(applyMiddleware(...middleware))
    );
  }
  store: any = null;
  render() {
    return <Provider store={this.store}>{this.props.children}</Provider>;
  }
}

export default ReduxWithMidleware;
