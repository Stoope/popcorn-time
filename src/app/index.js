// @flow
import * as React from 'react';
import ReactDOM from 'react-dom';
import { MaterialUI, Redux } from './HOCs';
import App from './components';

class Component extends React.Component<{}> {
  render() {
    return (
      <Redux>
        <MaterialUI>
          <App />
        </MaterialUI>
      </Redux>
    );
  }
}

const root = document.getElementById('root');
if (root != null) {
  ReactDOM.render(<Component />, root);
}
