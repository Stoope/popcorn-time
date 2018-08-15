import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles, StyleRulesCallback } from '@material-ui/core/styles';
import Search from './Search';
import SortOrder from './SortOrder';
import SortBy from './SortBy';
import Genre from './Genre';

type Props = {
  filter: Filter;
  title: string;
  changeFilter: (filter: Filter) => any;
  classes: Record<string, string>;
};

const styles: StyleRulesCallback = () => ({
  grow: {
    flex: '1 1 auto'
  }
});

class PageBarComponent extends React.Component<Props> {
  render() {
    const {
      classes,
      title,
      filter: { keywords = '', order = -1, sort = 'rating', genre = 'all' },
      changeFilter
    } = this.props;
    return (
      <AppBar position="static" color="default">
        <Toolbar>
          <Typography variant="title" color="inherit">
            {title}
          </Typography>
          <div className={classes.grow} />
          <SortOrder order={order} changeFilter={changeFilter} />
          <SortBy sort={sort} changeFilter={changeFilter} />
          <Genre genre={genre} changeFilter={changeFilter} />
          <Search value={keywords} changeFilter={changeFilter} />
        </Toolbar>
      </AppBar>
    );
  }
}

export default withStyles(styles)(PageBarComponent);
