import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store, { persistor } from '~/HOCs/ReduxWithMidleware/store';

type Props = {
  children: React.ReactElement<any>;
};

class ReduxWithMidleware extends React.Component<Props> {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          {this.props.children}
        </PersistGate>
      </Provider>
    );
  }
}

export default ReduxWithMidleware;
