import 'babel-polyfill';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
// import { MaterialUI, ReduxWithMidleware } from '~/HOCs';
import App from '~/components';

class Component extends React.Component<{}, {}> {
  render() {
    return (
      // <ReduxWithMidleware>
      //   <MaterialUI>
      <App />
      //   </MaterialUI>
      // </ReduxWithMidleware>
    );
  }
}

const root = document.getElementById('root');
if (root != null) {
  ReactDOM.render(<Component />, root);
}
