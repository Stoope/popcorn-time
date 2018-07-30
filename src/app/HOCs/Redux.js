// @flow
import * as React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from '../reducers';

class Redux extends React.Component<{ children?: React.Node }> {
  constructor(props) {
    super(props);
    this.store = createStore(rootReducer);
  }
  store: any = null;
  render() {
    return <Provider store={this.store}>{this.props.children}</Provider>;
  }
}

export default Redux;
