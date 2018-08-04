import React from 'react';
import { HashRouter } from 'react-router-dom';

class ReactRouter extends React.Component {
  render() {
    return <HashRouter>{this.props.children}</HashRouter>;
  }
}

export default ReactRouter;
