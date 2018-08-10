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
import ColorLensTwoTone from '@material-ui/icons/ColorLensTwoTone';
import { WithTheme, withTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

type Props = {
  type: 'primary' | 'secondary';
  changeSettings: typeof settingsActions.changeSettings;
} & InjectedIntlProps &
  WithTheme;

class NightMode extends React.Component<
  Props,
  {
    colorPickerAnchorEl: EventTarget & HTMLElement | null;
  }
> {
  buttonRef: React.RefObject<HTMLButtonElement>;
  state = {
    colorPickerAnchorEl: null
  };
  constructor(props: Props) {
    super(props);
    this.buttonRef = React.createRef();
  }
  openColorPicker = (event: React.MouseEvent<HTMLElement>) => {
    this.setState({
      colorPickerAnchorEl: this.buttonRef.current
    });
  };
  closeColorPicker = () => {
    this.setState({
      colorPickerAnchorEl: null
    });
  };
  render() {
    const { intl, changeSettings, type } = this.props;
    let title = null;
    switch (type) {
      case 'primary':
        title = intl.formatMessage(
          messages.settings_SettingsBody_title_primary
        );
        break;
      case 'secondary':
        title = intl.formatMessage(
          messages.settings_SettingsBody_title_secondary
        );
        break;
      default:
        title = 'Color';
        break;
    }
    return (
      <ListItem button={true} onClick={this.openColorPicker}>
        <ListItemIcon>
          {type === 'secondary' ? <ColorLensTwoTone /> : <ColorLens />}
        </ListItemIcon>
        <ListItemText primary={title} />
        <ListItemSecondaryAction>
          <Button
            buttonRef={this.buttonRef}
            variant="contained"
            color={type}
            onClick={this.openColorPicker}
          >
            ···
          </Button>
          <ColorPicker
            closeColorPicker={this.closeColorPicker}
            colorPickerAnchorEl={this.state.colorPickerAnchorEl}
            changeSettings={changeSettings}
            type={type}
          />
        </ListItemSecondaryAction>
      </ListItem>
    );
  }
}

export default injectIntl(withTheme()(NightMode));
