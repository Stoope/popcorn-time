import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store, { persistor } from '~/HOCs/ReduxWithMidleware/store';

const ReduxWithMidleware = (WrappedComponent: React.ComponentType<any>) => ({
  ...props
}) => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <WrappedComponent {...props} />
    </PersistGate>
  </Provider>
);

export default ReduxWithMidleware;
