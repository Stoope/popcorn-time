// @flow
import * as React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import 'typeface-roboto/index.css';

class MaterialUI extends React.Component<
  { children?: React.Node },
  { muTheme?: Object }
> {
  constructor(props) {
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
