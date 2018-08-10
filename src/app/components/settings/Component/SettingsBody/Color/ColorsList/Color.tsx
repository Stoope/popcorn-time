import React from 'react';
import messages from '../../index.messages';
import { injectIntl, InjectedIntlProps } from 'react-intl';
import Tooltip from '@material-ui/core/Tooltip';
import CheckIcon from '@material-ui/icons/Check';
import * as colors from '@material-ui/core/colors';
import { withStyles, StyleRulesCallback } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import { WithTheme, withTheme } from '@material-ui/core/styles';

type Props = {
  type: 'primary' | 'secondary';
  shades: string[];
  shade: number;
  currentColor: string;
  hue: string;
  changeSettings: (color: string) => void;
  classes: Record<string, string>;
} & InjectedIntlProps &
  WithTheme;

const styles: StyleRulesCallback = theme => ({
  iconButton: {
    borderRadius: 0,
    width: 60,
    height: 60
  },
  selectedIconButton: {
    borderRadius: 0,
    width: 60,
    height: 60,
    border: '1px solid white'
  },
  checkIcon: {
    fontSize: 34
  },
  container: {
    width: 240,
    height: 240,
    marginTop: theme.spacing.unit * 2
  }
});

class Color extends React.Component<Props, { color: string }> {
  constructor(props: Props) {
    super(props);
    this.state = {
      color: (colors as any)[props.hue][props.shades[props.shade]]
    };
  }
  componentDidUpdate(nextProps: Props) {
    const newColor = (colors as any)[nextProps.hue][
      nextProps.shades[nextProps.shade]
    ];
    if (this.state.color !== newColor) {
      this.setState({
        color: newColor
      });
    }
  }
  changeSettings = () => {
    this.props.changeSettings(this.state.color);
  };
  render() {
    const { classes, hue, currentColor, intl, theme, type } = this.props;
    const { color } = this.state;
    const translatedHue: string = (messages as any)[
      `settings_SettingsBody_${hue}`
    ]
      ? intl.formatMessage((messages as any)[`settings_SettingsBody_${hue}`])
      : hue;
    const isSelected = currentColor === color;
    return (
      <Tooltip
        disableFocusListener={true}
        placement="right"
        title={translatedHue}
        key={hue}
      >
        <IconButton
          className={
            isSelected ? classes.selectedIconButton : classes.iconButton
          }
          style={{ backgroundColor: color }}
          onClick={this.changeSettings}
          aria-label={`tooltip-${hue}`}
        >
          {isSelected && (
            <CheckIcon
              style={{ color: theme.palette[type].contrastText }}
              className={classes.checkIcon}
            />
          )}
        </IconButton>
      </Tooltip>
    );
  }
}

export default withStyles(styles)(withTheme()(injectIntl(Color)));
