import React from 'react';
import messages from './index.messages';
import { injectIntl, InjectedIntlProps } from 'react-intl';
import { settingsActions } from '~/components/settings';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Brightness2 from '@material-ui/icons/Brightness2';
import { WithTheme, withTheme } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';

type Props = {
  changeSettings: typeof settingsActions.changeSettings;
} & InjectedIntlProps &
  WithTheme;

class FontSize extends React.Component<Props, { fontSize: number | string }> {
  inputRef: React.RefObject<HTMLInputElement>;
  state = {
    fontSize: this.props.theme.typography.fontSize
  };
  constructor(props: Props) {
    super(props);
    this.inputRef = React.createRef();
  }
  validateValue = (value: number | string) => {
    return Number.isInteger(+value) && value > 7;
  };
  changeSettings: React.ChangeEventHandler<
    HTMLTextAreaElement | HTMLInputElement
  > = event => {
    this.setState({ fontSize: +event.target.value }, () => {
      const { fontSize } = this.state;
      if (this.validateValue(fontSize)) {
        this.props.changeSettings({
          theme: {
            typography: {
              fontSize
            }
          }
        });
      }
    });
  };
  focusInput = () => {
    this.inputRef.current && this.inputRef.current.focus();
  };
  render() {
    const { intl } = this.props;
    const { fontSize } = this.state;

    return (
      <ListItem button={true} onClick={this.focusInput}>
        <ListItemIcon>
          <Brightness2 />
        </ListItemIcon>
        <ListItemText
          primary={intl.formatMessage(messages.settings_SettingsBody_fontSize)}
        />
        <ListItemSecondaryAction>
          <Input
            inputRef={this.inputRef}
            error={!this.validateValue(fontSize)}
            value={fontSize}
            endAdornment={<InputAdornment position="end">px</InputAdornment>}
            type="number"
            onChange={this.changeSettings}
          />
        </ListItemSecondaryAction>
      </ListItem>
    );
  }
}

export default injectIntl(withTheme()(FontSize));
