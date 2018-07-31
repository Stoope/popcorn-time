// @flow
import * as React from 'react';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { changeSettings } from './actions';
import type { Config } from './reducer';

class App extends React.Component<{
  changeSettings: (payload: Config) => any
}> {
  render() {
    return (
      <Button
        onClick={() => this.props.changeSettings({ theme: { type: 'light' } })}
      >
        Primary
      </Button>
    );
  }
}

export default connect(
  null,
  { changeSettings }
)(App);
