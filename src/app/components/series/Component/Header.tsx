import React from 'react';
import { connect } from 'react-redux';
import { drawerActions } from '~/components/drawer';
import { State } from 'types';
import classNames from 'classnames';
import {
  withStyles,
  StyleRulesCallback,
  WithTheme,
  withTheme
} from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

type Props = {
  isDrawerOpen: State['drawerReducer']['isDrawerOpen'];
  openDrawer: typeof drawerActions.openDrawer;
  closeDrawer: typeof drawerActions.closeDrawer;
  classes: Record<string, string>;
} & WithTheme;

const styles: StyleRulesCallback = theme => ({
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar
  },
  toolbarOpened: {
    justifyContent: 'flex-end'
  },
  toolbarClosed: {
    justifyContent: 'center'
  }
});

class Header extends React.Component<Props> {
  render() {
    const {
      isDrawerOpen,
      openDrawer,
      closeDrawer,
      theme,
      classes
    } = this.props;
    return (
      <div
        className={classNames(
          classes.toolbar,
          isDrawerOpen ? classes.toolbarOpened : classes.toolbarClosed
        )}
      >
        {isDrawerOpen ? (
          <IconButton onClick={closeDrawer}>
            {theme.direction === 'rtl' ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        ) : (
          <IconButton aria-label="Open drawer" onClick={openDrawer}>
            <MenuIcon />
          </IconButton>
        )}
      </div>
    );
  }
}

export default connect(
  (state: State) => ({
    isDrawerOpen: state.drawerReducer.isDrawerOpen
  }),
  {
    openDrawer: drawerActions.openDrawer,
    closeDrawer: drawerActions.closeDrawer
  }
)(withStyles(styles)(withTheme()(Header)));
