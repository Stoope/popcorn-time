import React from 'react';
import messages from '../index.messages';
import { injectIntl, InjectedIntlProps } from 'react-intl';
import { settingsActions } from '~/components/settings';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ColorPicker from './ColorPicker';
import ColorLens from '@material-ui/icons/ColorLens';
import { WithTheme, withTheme } from '@material-ui/core/styles';

type Props = {
  changeSettings: typeof settingsActions.changeSettings;
} & InjectedIntlProps &
  WithTheme;

class NightMode extends React.Component<Props> {
  changeSettings = () => {
    this.props.changeSettings({
      theme: {
        palette: {
          type: this.props.theme.palette.type === 'dark' ? 'light' : 'dark'
        }
      }
    });
  };
  render() {
    const { theme, intl, changeSettings } = this.props;
    return (
      <ListItem button={true} onClick={this.changeSettings}>
        <ListItemIcon>
          <ColorLens />
        </ListItemIcon>
        <ListItemText
          primary={intl.formatMessage(messages.settings_SettingsBody_NightMode)}
        />
        <ListItemSecondaryAction>
          <ColorPicker changeSettings={changeSettings} type="primary" />
        </ListItemSecondaryAction>
      </ListItem>
    );
  }
}

export default injectIntl(withTheme()(NightMode));
