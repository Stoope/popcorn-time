import React from 'react';
import {
  MuiThemeProvider,
  createMuiTheme,
  Theme
} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { connect } from 'react-redux';
import 'typeface-roboto';
import memoize from 'memoizee';
import { State } from 'types';

const generateMuiTheme = memoize(
  (theme: State['settingsReducer']['config']['theme']) => createMuiTheme(theme),
  {
    normalizer: function(args: any[]) {
      return JSON.stringify(args[0]);
    }
  }
);
type Props = {
  config: State['settingsReducer']['config'];
  children: React.ReactElement<any>;
};

class MaterialUI extends React.Component<Props, { muTheme: Theme }> {
  static getDerivedStateFromProps(props: Props) {
    const { config } = props;
    return { muTheme: generateMuiTheme(config.theme) };
  }
  constructor(props: Props) {
    super(props);
    const { config } = props;
    this.state = {
      muTheme: generateMuiTheme(config.theme)
    };
  }
  render() {
    return (
      <MuiThemeProvider theme={this.state.muTheme}>
        <CssBaseline>{this.props.children}</CssBaseline>
      </MuiThemeProvider>
    );
  }
}

export default connect((state: State) => ({
  config: state.settingsReducer.config
}))(MaterialUI);
