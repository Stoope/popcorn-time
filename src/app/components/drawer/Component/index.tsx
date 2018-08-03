import React from 'react';
import { connect } from 'react-redux';
import { drawerActions } from '~/components/drawer';
import { settingsActions } from '~/components/settings';
import { State } from 'types';
import classNames from 'classnames';
import {
  withStyles,
  StyleRulesCallback,
  WithTheme,
  withTheme
} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import messages from './index.messages';
import { injectIntl, InjectedIntlProps } from 'react-intl';
import List from '@material-ui/core/List';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Settings from '@material-ui/icons/SettingsSharp';
import ListItemText from '@material-ui/core/ListItemText';

const drawerWidth = 240;

type Props = {
  isDrawerOpen: State['drawerReducer']['isDrawerOpen'];
  openDrawer: typeof drawerActions.openDrawer;
  closeDrawer: typeof drawerActions.closeDrawer;
  openSettings: typeof settingsActions.openSettings;
  classes: Record<string, string>;
} & InjectedIntlProps &
  WithTheme;

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

class DrawerComponent extends React.Component<Props> {
  render() {
    const {
      isDrawerOpen,
      openDrawer,
      closeDrawer,
      theme,
      classes,
      openSettings,
      intl
    } = this.props;
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
        <Divider />
        <List>
          <ListItem button={true} onClick={openSettings}>
            <ListItemIcon>
              <Settings />
            </ListItemIcon>
            <ListItemText
              primary={intl.formatMessage(messages.drawer_Drawer_settings)}
            />
          </ListItem>
        </List>
      </Drawer>
    );
  }
}

export default connect(
  (state: State) => ({
    isDrawerOpen: state.drawerReducer.isDrawerOpen
  }),
  {
    openDrawer: drawerActions.openDrawer,
    closeDrawer: drawerActions.closeDrawer,
    openSettings: settingsActions.openSettings
  }
)(withStyles(styles)(injectIntl(withTheme()(DrawerComponent))));
