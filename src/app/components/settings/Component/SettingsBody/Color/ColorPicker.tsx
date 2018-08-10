import React, { Fragment } from 'react';
import { settingsActions } from '~/components/settings';
import { WithTheme, withTheme } from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';
import Button from '@material-ui/core/Button';
import { withStyles, StyleRulesCallback } from '@material-ui/core/styles';
import ColorsList from './ColorsList';
import ShadesList from './ShadesList';
import ColorInput from './ColorInput';
import ColorTitle from './ColorTitle';

const hues = [
  'red',
  'pink',
  'purple',
  'deepPurple',
  'indigo',
  'blue',
  'lightBlue',
  'cyan',
  'green',
  'lightGreen',
  'lime',
  'yellow',
  'amber',
  'orange',
  'deepOrange',
  'brown'
];
const shades = [
  '900',
  '800',
  '700',
  '600',
  '500',
  '400',
  '300',
  '200',
  '100',
  '50',
  'A700',
  'A400',
  'A200',
  'A100'
];

type Props = {
  type: 'primary' | 'secondary';
  changeSettings: typeof settingsActions.changeSettings;
  classes: Record<string, string>;
} & WithTheme;

const styles: StyleRulesCallback = theme => ({
  slider: {
    width: 'calc(100% - 80px)'
  },
  container: {
    padding: theme.spacing.unit,
    width: theme.spacing.unit * 2 + 240
  }
});

class ColorPicker extends React.Component<
  Props,
  {
    colorPickerAnchorEl: EventTarget & HTMLElement | null;
    shade: number;
  }
> {
  constructor(props: Props) {
    super(props);
    let shade = null;
    switch (props.type) {
      case 'primary':
        shade = 4;
        break;
      case 'secondary':
        shade = 11;
        break;
      default:
        shade = 0;
        break;
    }
    this.state = {
      colorPickerAnchorEl: null,
      shade
    };
  }
  openColorPicker = (event: React.MouseEvent<HTMLElement>) => {
    this.setState({
      colorPickerAnchorEl: event.currentTarget
    });
  };

  closeColorPicker = () => {
    this.setState({
      colorPickerAnchorEl: null
    });
  };
  changeSettings = (color: string) => {
    const muiColor = { main: color };
    this.props.theme.palette.augmentColor(muiColor, 500, 300, 700);
    this.props.changeSettings({
      theme: {
        palette: {
          [this.props.type]: muiColor
        }
      }
    });
  };
  render() {
    const { colorPickerAnchorEl, shade } = this.state;
    const { type, theme, classes } = this.props;
    const color = theme.palette[type].main;
    return (
      <Fragment>
        <Button variant="contained" color={type} onClick={this.openColorPicker}>
          ···
        </Button>
        <Popover
          open={Boolean(colorPickerAnchorEl)}
          anchorEl={colorPickerAnchorEl}
          onClose={this.closeColorPicker}
          anchorOrigin={{
            vertical: 'center',
            horizontal: 'center'
          }}
          transformOrigin={{
            vertical: 'center',
            horizontal: 'right'
          }}
        >
          <div className={classes.container}>
            <ColorTitle type={type} />
            <ColorInput
              currentColor={color}
              changeSettings={this.changeSettings}
            />
            <ColorsList
              hues={hues}
              shades={shades}
              currentColor={color}
              shade={shade}
              changeSettings={this.changeSettings}
            />
            <ShadesList currentColor={color} />
          </div>
        </Popover>
      </Fragment>
    );
  }
}

export default withStyles(styles)(withTheme()(ColorPicker));
