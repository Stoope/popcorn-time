// @flow
import * as React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import 'typeface-roboto/index.css';
import type { Config } from '~/components/settings';
import type { ReduxState } from '~reduxState';

type Props = { children?: React.Node, config: Config };

class MaterialUI extends React.Component<Props, { muTheme?: Object }> {
  constructor(props: Props) {
    super(props);
    const { config } = props;
    this.state = {
      muTheme: createMuiTheme({
        palette: {
          type: config.type
        }
      })
    };
  }
  render() {
    return (
      <MuiThemeProvider theme={this.state.muTheme}>
        {this.props.children}
      </MuiThemeProvider>
    );
  }
}

const mapStateToProps = (state: ReduxState) => ({
  config: state.settingsReducer.config
});

export default connect(mapStateToProps)(MaterialUI);
