import React from 'react';
import { SettingsComponent } from './settings';
import { DrawerComponent } from './drawer';
import { withStyles, StyleRulesCallback } from '@material-ui/core/styles';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { withRouter, RouteComponentProps } from 'react-router';

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
      <HashRouter>
        <div className={classes.root}>
          <DrawerComponent />
          <main className={classes.content}>
            <Switch>
              <Route exact={true} path="/" render={() => <div>Match</div>} />
              <Route path="/series" render={() => <div>series</div>} />
              <Route render={() => <div>Miss</div>} />
            </Switch>
          </main>
          <SettingsComponent />
        </div>
      </HashRouter>
    );
  }
}

export default withRouter(withStyles(styles)(App));
