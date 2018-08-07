import React from 'react';
import { SettingsComponent } from './settings';
import { DrawerComponent } from './drawer';
import { SeriesComponent } from './series';
import { withStyles, StyleRulesCallback } from '@material-ui/core/styles';
import { Route, Switch } from 'react-router';

const styles: StyleRulesCallback = theme => ({
  '@global': {
    '::-webkit-scrollbar': {
      width: 8,
      height: 8,
      borderRadius: 8
    },
    '::-webkit-scrollbar-button': {
      display: 'none'
    },
    '::-webkit-scrollbar-track': {
      background: theme.palette.type === 'light' ? '#e1e1e1' : '#212121'
    },
    '::-webkit-scrollbar-thumb': {
      background: theme.palette.type === 'light' ? '#757575' : '#9e9e9e',
      borderRadius: 8
    }
  },
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
    padding: theme.spacing.unit * 3,
    height: '100vh',
    overflow: 'auto'
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
          <Switch>
            <Route exact={true} path="/" render={() => <div>Match</div>} />
            <Route path="/series" component={SeriesComponent} />
            <Route path="/movies" render={() => <div>movies</div>} />
            <Route render={() => <div>Miss</div>} />
          </Switch>
        </main>
        <SettingsComponent />
      </div>
    );
  }
}

export default withStyles(styles)(App);
