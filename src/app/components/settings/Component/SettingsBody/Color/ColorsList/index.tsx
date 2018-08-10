import React from 'react';
import { withStyles, StyleRulesCallback } from '@material-ui/core/styles';
import Color from './Color';

type Props = {
  hues: string[];
  shades: string[];
  shade: number;
  currentColor: string;
  changeSettings: (color: string) => void;
  classes: Record<string, string>;
};

const styles: StyleRulesCallback = theme => ({
  container: {
    width: 240,
    height: 240,
    marginTop: theme.spacing.unit * 2
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
      currentColor
    } = this.props;
    return (
      <div className={classes.container}>
        {hues.map(hue => (
          <Color
            key={hue}
            shades={shades}
            shade={shade}
            hue={hue}
            currentColor={currentColor}
            changeSettings={changeSettings}
          />
        ))}
      </div>
    );
  }
}

export default withStyles(styles)(ColorsList);
