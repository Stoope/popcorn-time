import React from 'react';
import messages from '../index.messages';
import { injectIntl, InjectedIntlProps } from 'react-intl';
import Tooltip from '@material-ui/core/Tooltip';
import CheckIcon from '@material-ui/icons/Check';
import * as colors from '@material-ui/core/colors';
import { withStyles, StyleRulesCallback } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';

type Props = {
  hues: string[];
  shades: string[];
  shade: number | null;
  currentColor: string | null;
  changeSettings: (color: string) => void;
  classes: Record<string, string>;
} & InjectedIntlProps;

const styles: StyleRulesCallback = theme => ({
  iconButton: {
    borderRadius: 0
  },
  checkIcon: {
    fontSize: 30
  },
  container: {
    width: 192,
    height: 192
  }
});

class ColorsList extends React.Component<Props> {
  render() {
    const {
      classes,
      changeSettings,
      hues,
      shades,
      shade,
      currentColor,
      intl
    } = this.props;
    return (
      <div className={classes.container}>
        {hues.map(hue => {
          const backgroundColor: string = (colors as any)[hue][
            shades[shade || 0]
          ];
          const translatedHue: string = (messages as any)[
            `settings_SettingsBody_${hue}`
          ]
            ? intl.formatMessage(
                (messages as any)[`settings_SettingsBody_${hue}`]
              )
            : hue;
          return (
            <Tooltip
              disableFocusListener={true}
              placement="left"
              title={translatedHue}
              key={hue}
            >
              <IconButton
                className={classes.iconButton}
                style={{ backgroundColor }}
                onClick={() => changeSettings(backgroundColor)}
                aria-label={`tooltip-${hue}`}
              >
                {currentColor === backgroundColor && (
                  <CheckIcon className={classes.checkIcon} />
                )}
              </IconButton>
            </Tooltip>
          );
        })}
      </div>
    );
  }
}

export default withStyles(styles)(injectIntl(ColorsList));
