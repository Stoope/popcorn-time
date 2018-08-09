import React, { Fragment } from 'react';
import messages from '../index.messages';
import { injectIntl, InjectedIntlProps } from 'react-intl';
import { settingsActions } from '~/components/settings';
import { WithTheme, withTheme } from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Radio from '@material-ui/core/Radio';
import Grid from '@material-ui/core/Grid';
import Tooltip from '@material-ui/core/Tooltip';
import Input from '@material-ui/core/Input';
import { rgbToHex } from '@material-ui/core/styles/colorManipulator';
import { capitalize } from '@material-ui/core/utils/helpers';
import { withStyles, StyleRulesCallback } from '@material-ui/core/styles';
import ColorsList from './ColorsList';

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
} & InjectedIntlProps &
  WithTheme;

const styles: StyleRulesCallback = theme => ({
  sliderContainer: {
    display: 'flex',
    alignItems: 'center',
    marginTop: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit
  },
  slider: {
    width: 'calc(100% - 80px)'
  },
  colorBar: {
    marginTop: theme.spacing.unit * 2
  },
  colorSquare: {
    width: 64,
    height: 64,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

class ColorPicker extends React.Component<
  Props,
  { colorPickerAnchorEl: EventTarget | null }
> {
  state = {
    colorPickerAnchorEl: null
  };
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
    this.props.changeSettings({
      theme: {
        palette: {
          [this.props.type]: { main: color }
        }
      }
    });
  };
  render() {
    const { colorPickerAnchorEl, secondaryShade, primaryShade } = this.state;
    const { type, theme, classes, changeSettings } = this.props;
    let color = null;
    let shade = null;
    switch (type) {
      case 'primary':
        color = theme.palette.primary.main;
        shade = 4;
        break;
      case 'secondary':
        color = theme.palette.secondary.main;
        shade = 11;
        break;
      default:
        break;
    }
    return (
      <Fragment>
        <Button variant="contained" color={type} onClick={this.openColorPicker}>
          Open Popover
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
          <div>
            {/* <Typography gutterBottom={true} variant="title">
              {capitalize(theme.palette.primary.main)}
            </Typography>
            <Input
              id={theme.palette.primary.main}
              value={theme.palette.primary.main}
              onChange={event => {
                const isRgb = (string: string) =>
                  /#?([0-9a-f]{6})/i.test(string);

                const {
                  target: { value: color }
                } = event;

                if (isRgb(color)) {
                  changeSettings({
                    theme: {
                      palette: {
                        [type]: { main: event.target.value }
                      }
                    }
                  });
                }
              }}
              inputProps={{
                'aria-label': `${capitalize(theme.palette.primary.main)} color`
              }}
              fullWidth
            /> */}
            {/* <div className={classes.sliderContainer}>
            <Typography id={`${intent}ShadeSliderLabel`}>Shade:</Typography>
            <Slider
              className={classes.slider}
              value={intentShade}
              min={0}
              max={13}
              step={1}
              onChange={this.handleChangeShade(intent)}
              aria-labelledby={`${intent}ShadeSliderLabel`}
            />
            <Typography>{shades[intentShade]}</Typography>
          </div> */}
            <ColorsList
              hues={hues}
              shades={shades}
              currentColor={color}
              shade={shade}
              changeSettings={this.changeSettings}
            />
            {/* {(() => {
              const background = { main: theme.palette.primary.main };
              theme.palette.augmentColor(background);
              return (
                <Grid container className={classes.colorBar}>
                  {['dark', 'main', 'light'].map(key => (
                    <div
                      className={classes.colorSquare}
                      style={{ backgroundColor: background[key] }}
                      key={key}
                    >
                      <Typography
                        variant="caption"
                        style={{
                          color: theme.palette.getContrastText(background[key])
                        }}
                      >
                        {rgbToHex(background[key])}
                      </Typography>
                    </div>
                  ))}
                </Grid>
              );
            })()} */}
          </div>
        </Popover>
      </Fragment>
    );
  }
}

export default injectIntl(withTheme()(withStyles(styles)(ColorPicker)));
