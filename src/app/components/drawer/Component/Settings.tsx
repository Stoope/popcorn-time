import React from 'react';
import { connect } from 'react-redux';
import { settingsActions } from '~/components/settings';
import { State } from 'types';
import messages from './index.messages';
import { injectIntl, InjectedIntlProps } from 'react-intl';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import SettingsIcon from '@material-ui/icons/SettingsSharp';
import ListItemText from '@material-ui/core/ListItemText';

type Props = {
  isSettingsOpen: State['settingsReducer']['isSettingsOpen'];
  openSettings: typeof settingsActions.openSettings;
  activeItemClassName: string;
} & InjectedIntlProps;

class Settings extends React.Component<Props> {
  render() {
    const {
      openSettings,
      intl,
      isSettingsOpen,
      activeItemClassName
    } = this.props;
    return (
      <ListItem
        button={true}
        onClick={openSettings}
        className={isSettingsOpen ? activeItemClassName : undefined}
      >
        <ListItemIcon>
          <SettingsIcon />
        </ListItemIcon>
        <ListItemText
          primary={intl.formatMessage(messages.drawer_Drawer_settings)}
        />
      </ListItem>
    );
  }
}

export default connect(
  (state: State) => ({
    isSettingsOpen: state.settingsReducer.isSettingsOpen
  }),
  {
    openSettings: settingsActions.openSettings
  }
)(injectIntl(Settings));
