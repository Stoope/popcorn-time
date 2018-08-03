import React from 'react';
import { SettingsComponent } from './settings';
import { DrawerComponent } from './drawer';
import { withStyles, StyleRulesCallback } from '@material-ui/core/styles';

const styles: StyleRulesCallback = theme => ({
  root: {
    flexGrow: 1,
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex'
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3
  }
});

type Props = {
  classes: Record<string, string>;
};

class App extends React.Component<Props> {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <DrawerComponent />
        <main className={classes.content}>
          {'<Typography noWrap>dsdsds</Typography>'}
        </main>
        <SettingsComponent />
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(App);
