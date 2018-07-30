// @flow
import * as React from 'react';
import ReactDOM from 'react-dom';
import { MaterialUI } from './HOCs';
import App from './components';

class Component extends React.Component<{}> {
  render() {
    return (
      <MaterialUI>
        <App />
      </MaterialUI>
    );
  }
}

const root = document.getElementById('root');
if (root != null) {
  ReactDOM.render(<Component />, root);
}
