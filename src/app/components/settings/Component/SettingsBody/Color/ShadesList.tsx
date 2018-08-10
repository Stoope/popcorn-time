import React, { Fragment } from 'react';
import messages from '../index.messages';
import { injectIntl, InjectedIntlProps } from 'react-intl';
import { withStyles, StyleRulesCallback } from '@material-ui/core/styles';
import { WithTheme, withTheme } from '@material-ui/core/styles';
import { SimplePaletteColorOptions } from '@material-ui/core/styles/createPalette';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { rgbToHex } from '@material-ui/core/styles/colorManipulator';

type Props = {
  currentColor: string;
  classes: Record<string, string>;
} & InjectedIntlProps &
  WithTheme;

const styles: StyleRulesCallback = theme => ({
  colorBar: {
    marginTop: theme.spacing.unit * 2,
    width: 240
  },
  colorSquare: {
    width: 80,
    height: 80,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    width: 240
  }
});

class ShadesList extends React.Component<Props> {
  render() {
    const { classes, currentColor, theme, intl } = this.props;
    const background: SimplePaletteColorOptions & { [key: string]: string } = {
      main: currentColor
    };
    theme.palette.augmentColor(background, 500, 300, 700);
    return (
      <Fragment>
        <Grid container={true} className={classes.colorBar}>
          <Typography variant="subheading" className={classes.title}>
            {intl.formatMessage(messages.settings_SettingsBody_snades)}
          </Typography>
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
      </Fragment>
    );
  }
}

export default withStyles(styles)(withTheme()(injectIntl(ShadesList)));
