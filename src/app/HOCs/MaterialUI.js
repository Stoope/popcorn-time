// @flow
import * as React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import 'typeface-roboto';
import type { Config, Theme } from '~/components/settings';
import type { ReduxState } from '~reduxState';
import get from 'lodash/get';
import isEqual from 'lodash/isEqual';
import memoizeOne from 'memoize-one';

type Props = { children?: React.Node, config: Config };

const generateMuiTheme = memoizeOne(
  (theme: ?Theme) =>
    createMuiTheme({
      palette: {
        type: get(theme, 'type', 'light')
      }
    }),
  isEqual
);

class MaterialUI extends React.Component<Props, { muTheme?: Object }> {
  constructor(props: Props) {
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

export default connect((state: ReduxState) => ({
  config: state.settingsReducer.config
}))(MaterialUI);
