import React from 'react';
import { HashRouter } from 'react-router-dom';

const ReactRouter = (WrappedComponent: React.ComponentType<any>) => ({
  ...props
}) => (
  <HashRouter>
    <WrappedComponent {...props} />
  </HashRouter>
);

export default ReactRouter;
