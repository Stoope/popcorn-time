import React from 'react';
import { withStyles, StyleRulesCallback } from '@material-ui/core/styles';
import Grid from './Grid';
import PageBar from './PageBar';

const styles: StyleRulesCallback = () => ({
  root: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column'
  }
});

class SeriesComponent extends React.Component<{
  classes: Record<string, string>;
}> {
  render() {
    return (
      <div className={this.props.classes.root}>
        <PageBar />
        <Grid />
      </div>
    );
  }
}

export default withStyles(styles)(SeriesComponent);
