import React from 'react';
import messages from './index.messages';
import { injectIntl, InjectedIntlProps } from 'react-intl';
import ListSubheader from '@material-ui/core/ListSubheader';
import { connect } from 'react-redux';
import { settingsActions } from '~/components/settings';
import DialogContent from '@material-ui/core/DialogContent';
import List from '@material-ui/core/List';
import { State } from 'types';

type Props = {
  config: State['settingsReducer']['config'];
  changeSettings: typeof settingsActions.changeSettings;
} & InjectedIntlProps;

const SettingsBody: React.SFC<Props> = ({ changeSettings, intl }: Props) => (
  <DialogContent>
    <List
      subheader={
        <ListSubheader>
          {intl.formatMessage(messages.settings_SettingsBody_appearance)}
        </ListSubheader>
      }
    >
      dssdd
    </List>
  </DialogContent>
);

export default connect(
  (state: State) => ({
    config: state.settingsReducer.config
  }),
  {
    changeSettings: settingsActions.changeSettings
  }
)(injectIntl(SettingsBody));
