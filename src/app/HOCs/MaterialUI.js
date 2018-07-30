// @flow
import * as React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import 'typeface-roboto/index.css';

type Props = { children?: React.Node };

class MaterialUI extends React.Component<Props, { muTheme?: Object }> {
  constructor(props: Props) {
    super(props);
    this.state = {
      muTheme: createMuiTheme({})
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

export default MaterialUI;
