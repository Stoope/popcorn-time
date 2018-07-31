// @flow
import * as React from 'react';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { changeSettings } from './actions';
import type { Config } from './';
import type { ReduxState } from '~reduxState';

class App extends React.Component<{
  changeSettings: (payload: Config) => any,
  config: Config
}> {
  render() {
    return (
      <Button
        onClick={() =>
          this.props.changeSettings({
            theme: {
              type:
                this.props.config.theme &&
                this.props.config.theme.type === 'light'
                  ? 'dark'
                  : 'light'
            }
          })
        }
      >
        Primary
      </Button>
    );
  }
}

export default connect(
  (state: ReduxState) => ({
    config: state.settingsReducer.config
  }),
  { changeSettings }
)(App);
