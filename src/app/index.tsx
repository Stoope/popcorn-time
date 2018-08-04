import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { MaterialUI, ReduxWithMidleware, ReactIntl, ReactRouter } from '~/HOCs';
import App from '~/components';
import './index.css';

class Component extends React.Component<{}, {}> {
  render() {
    return (
      <ReduxWithMidleware>
        <ReactIntl>
          <MaterialUI>
            <ReactRouter>
              <App />
            </ReactRouter>
          </MaterialUI>
        </ReactIntl>
      </ReduxWithMidleware>
    );
  }
}

const root = document.getElementById('root');
if (root != null) {
  ReactDOM.render(<Component />, root);
}
