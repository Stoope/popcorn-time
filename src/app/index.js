// @flow
import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component<{}> {
  func = (a: number) => {
    return a;
  };
  render() {
    const res = 'this.func()';
    return <h1>{res}</h1>;
  }
}

const root = document.getElementById('root');
if (root != null) {
  ReactDOM.render(<App />, root);
}
