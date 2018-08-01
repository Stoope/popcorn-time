import React from 'react';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { changeSettings } from './actions';
import { State } from '~types';

class App extends React.Component<{
  config: State['settingsReducer']['config'];
  changeSettings: typeof changeSettings;
}> {
  render() {
    return (
      <Button
        onClick={() =>
          this.props.changeSettings({
            theme: { palette: { type: 'dark' }, typography: { fontSize: 50 } }
          })
        }
      >
        Primary
      </Button>
    );
  }
}

export default connect(
  (state: State) => ({
    config: state.settingsReducer.config
  }),
  { changeSettings }
)(App);
