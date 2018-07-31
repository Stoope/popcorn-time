import * as React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import 'typeface-roboto';
import get from 'lodash/get';
import isEqual from 'lodash/isEqual';
import memoizeOne from 'memoize-one';

const generateMuiTheme = memoizeOne(
  theme =>
    createMuiTheme({
      palette: {
        type: get(theme, 'type', 'light')
      }
    }),
  isEqual
);

class MaterialUI extends React.Component {
  constructor(props) {
    super(props);
    const { config } = props;
    this.state = {
      muTheme: generateMuiTheme(config.theme)
    };
  }
  static getDerivedStateFromProps(props) {
    const { config } = props;
    return { muTheme: generateMuiTheme(config.theme) };
  }
  render() {
    return (
      <MuiThemeProvider theme={this.state.muTheme}>
        {this.props.children}
      </MuiThemeProvider>
    );
  }
}

export default connect(state => ({
  config: state.settingsReducer.config
}))(MaterialUI);
