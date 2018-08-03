import React from 'react';
import messages from './index.messages';
import { injectIntl, InjectedIntlProps } from 'react-intl';
import ListSubheader from '@material-ui/core/ListSubheader';
import { connect } from 'react-redux';
import { settingsActions } from '~/components/settings';
import List from '@material-ui/core/List';
import { State } from 'types';
import { withStyles, StyleRulesCallback } from '@material-ui/core/styles';
import NightMode from './NightMode';

type Props = {
  config: State['settingsReducer']['config'];
  changeSettings: typeof settingsActions.changeSettings;
  classes: Record<string, string>;
} & InjectedIntlProps;

const styles: StyleRulesCallback = theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    overflow: 'auto',
    flex: '1 1 auto',
    padding: '0 0 24px',
    WebkitOverflowScrolling: 'touch'
  },
  listSection: {
    backgroundColor: 'inherit'
  },
  ul: {
    backgroundColor: 'inherit',
    padding: 0,
    listStyleType: 'none'
  }
});

const SettingsBody: React.SFC<Props> = ({
  changeSettings,
  intl,
  classes,
  config
}: Props) => (
  <List className={classes.root}>
    <li className={classes.listSection}>
      <ul className={classes.ul}>
        <ListSubheader>
          {intl.formatMessage(messages.settings_SettingsBody_appearance)}
        </ListSubheader>
        <NightMode changeSettings={changeSettings} theme={config.theme} />
      </ul>
    </li>
  </List>
);

export default connect(
  (state: State) => ({
    config: state.settingsReducer.config
  }),
  {
    changeSettings: settingsActions.changeSettings
  }
)(withStyles(styles)(injectIntl(SettingsBody)));
