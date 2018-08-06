import React from 'react';
import { SettingsComponent } from './settings';
import { DrawerComponent } from './drawer';
import { SeriesComponent } from './series';
import { withStyles, StyleRulesCallback } from '@material-ui/core/styles';
import { Route, Switch } from 'react-router';

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
