// @flow
import * as React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from '../reducers';

type Props = { children?: React.Node };

class Redux extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
    this.store = createStore(rootReducer);
  }
  store: any = null;
  render() {
    return <Provider store={this.store}>{this.props.children}</Provider>;
  }
}

export default Redux;
