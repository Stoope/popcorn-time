import React from 'react';
import { connect } from 'react-redux';
import { State } from 'types';
import classNames from 'classnames';
import { withStyles, StyleRulesCallback } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import Header from './Header';
import Settings from './Settings';
import Shows from './Shows';

const drawerWidth = 240;

type Props = {
  isDrawerOpen: State['drawerReducer']['isDrawerOpen'];
  classes: Record<string, string>;
};

const styles: StyleRulesCallback = theme => ({
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  list: {
    paddingTop: 0,
    paddingBottom: 0
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    width: theme.spacing.unit * 7,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing.unit * 9
    }
  },
  activeItem: {
    backgroundColor: theme.palette.action.selected
  }
});

class DrawerComponent extends React.Component<Props> {
  render() {
    const { isDrawerOpen, classes } = this.props;
    return (
      <Drawer
        variant="permanent"
        classes={{
          paper: classNames(
            classes.drawerPaper,
            !isDrawerOpen && classes.drawerPaperClose
          )
        }}
        open={isDrawerOpen}
      >
        <Header />
        <Divider />
        <List className={classes.list}>
          <Shows activeItemClassName={classes.activeItem} />
          <Divider />
          <Settings activeItemClassName={classes.activeItem} />
        </List>
      </Drawer>
    );
  }
}

export default connect((state: State) => ({
  isDrawerOpen: state.drawerReducer.isDrawerOpen
}))(withStyles(styles)(DrawerComponent));
