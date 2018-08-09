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
import CheckIcon from '@material-ui/icons/Check';
import * as colors from '@material-ui/core/colors';
import { withStyles, StyleRulesCallback } from '@material-ui/core/styles';

const hues = Object.keys(colors);
const shades = [
  900,
  800,
  700,
  600,
  500,
  400,
  300,
  200,
  100,
  50,
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
  radio: {
    width: 48,
    height: 48
  },
  radioSelected: {
    width: 48,
    height: 48,
    border: '1px solid white',
    color: theme.palette.common.white,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  swatch: {
    width: 192
  },
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
    colorPickerAnchorEl: null,
    primaryShade: 4,
    secondaryShade: 11
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
  render() {
    const { colorPickerAnchorEl, secondaryShade, primaryShade } = this.state;
    const { type, theme, classes, changeSettings } = this.props;
    // let color = null;
    // switch (type) {
    //   case 'primary':
    //     color = theme.palette.primary;
    //     break;
    //   default:
    //     break;
    // }
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
          <Grid item={true} xs={12} sm={6} md={4}>
            {/* <Typography gutterBottom variant="title">
            {capitalize(intent)}
          </Typography>
          <Input
            id={intent}
            value={intentInput}
            onChange={this.handleChangeColor(intent)}
            inputProps={{
              'aria-label': `${capitalize(intent)} color`,
            }}
            fullWidth
          />
          <div className={classes.sliderContainer}>
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
            <div className={classes.swatch}>
              {hues.map(hue => {
                const shade =
                  type === 'primary'
                    ? shades[primaryShade]
                    : shades[secondaryShade];
                const backgroundColor = colors[hue][shade];

                return (
                  <Tooltip placement="right" title={hue} key={hue}>
                    <Radio
                      color="default"
                      checked={theme.palette[type].main === backgroundColor}
                      onChange={() =>
                        changeSettings({
                          theme: {
                            palette: {
                              [type]: { main: backgroundColor }
                            }
                          }
                        })
                      }
                      value={hue}
                      name={type}
                      aria-labelledby={`tooltip-${type}-${hue}`}
                      icon={
                        <div
                          className={classes.radio}
                          style={{ backgroundColor }}
                        />
                      }
                      checkedIcon={
                        <div
                          className={classes.radioSelected}
                          style={{ backgroundColor }}
                        >
                          <CheckIcon style={{ fontSize: 30 }} />
                        </div>
                      }
                    />
                  </Tooltip>
                );
              })}
            </div>
            {/* {colorBar(color)} */}
          </Grid>
        </Popover>
      </Fragment>
    );
  }
}

export default injectIntl(withTheme()(withStyles(styles)(ColorPicker)));
