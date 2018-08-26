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
    normalizer: (theme: State['settingsReducer']['config']['theme']) =>
      JSON.stringify(theme)
  }
);
type Props = {
  config: State['settingsReducer']['config'];
  children: React.ReactElement<any>;
};

const MaterialUI = (WrappedComponent: React.ComponentType<any>) => {
  class Component extends React.Component<Props, { muTheme: Theme }> {
    constructor(props: Props) {
      super(props);
      const { config } = props;
      this.state = {
        muTheme: generateMuiTheme(config.theme)
      };
    }
    static getDerivedStateFromProps(props: Props) {
      const { config } = props;
      return { muTheme: generateMuiTheme(config.theme) };
    }
    render() {
      return (
        <MuiThemeProvider theme={this.state.muTheme}>
          <CssBaseline>
            <WrappedComponent {...this.props} />
          </CssBaseline>
        </MuiThemeProvider>
      );
    }
  }
  return connect((state: State) => ({
    config: state.settingsReducer.config
  }))(Component);
};

export default MaterialUI;
