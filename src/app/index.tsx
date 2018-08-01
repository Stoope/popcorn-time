import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { MaterialUI, ReduxWithMidleware } from '~/HOCs';
import App from '~/components';
import './index.css';

class Component extends React.Component<{}, {}> {
  render() {
    return (
      <ReduxWithMidleware>
        <MaterialUI>
          <App />
        </MaterialUI>
      </ReduxWithMidleware>
    );
  }
}

const root = document.getElementById('root');
if (root != null) {
  ReactDOM.render(<Component />, root);
}
