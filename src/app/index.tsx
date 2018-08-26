import React from 'react';
import ReactDOM from 'react-dom';
import { MaterialUI, ReduxWithMidleware, ReactIntl, ReactRouter } from '~/HOCs';
import App from '~/components';
import { compose } from 'recompose';
import './index.css';

const AppWithHOCs = compose(
  ReduxWithMidleware,
  ReactIntl,
  MaterialUI,
  ReactRouter
)(App);
class Component extends React.Component<{}, {}> {
  render() {
    return <AppWithHOCs />;
  }
}

const root = document.getElementById('root');
if (root != null) {
  ReactDOM.render(<Component />, root);
}
