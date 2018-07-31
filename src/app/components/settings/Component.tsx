import * as React from 'react';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { changeSettings } from './actions';

class App extends React.Component {
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
  state => ({
    config: state.settingsReducer.config
  }),
  { changeSettings }
)(App);
