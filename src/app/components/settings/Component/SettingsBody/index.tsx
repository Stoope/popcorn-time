import React from 'react';
import messages from './index.messages';
import { injectIntl, InjectedIntlProps } from 'react-intl';
import ListSubheader from '@material-ui/core/ListSubheader';
import { connect } from 'react-redux';
import { settingsActions } from '~/components/settings';
import DialogContent from '@material-ui/core/DialogContent';
import List from '@material-ui/core/List';
import { State } from 'types';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { withStyles, StyleRulesCallback } from '@material-ui/core/styles';

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
    padding: 0
  }
});

const SettingsBody: React.SFC<Props> = ({
  changeSettings,
  intl,
  classes
}: Props) => (
  <List className={classes.root}>
    {[0, 1, 2, 3, 4, 5, 6].map(sectionId => (
      <li key={`section-${sectionId}`} className={classes.listSection}>
        <ul className={classes.ul}>
          <ListSubheader>
            {intl.formatMessage(messages.settings_SettingsBody_appearance)}
          </ListSubheader>
          {[0, 1, 2, 3].map(item => (
            <ListItem key={`item-${sectionId}-${item}`}>
              <ListItemText primary={`Item ${item}`} />
            </ListItem>
          ))}
        </ul>
      </li>
    ))}
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
