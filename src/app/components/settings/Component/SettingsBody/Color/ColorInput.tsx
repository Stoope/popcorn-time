import React from 'react';
import Input from '@material-ui/core/Input';
import { capitalize } from '@material-ui/core/utils/helpers';
import { withStyles, StyleRulesCallback } from '@material-ui/core/styles';

type Props = {
  currentColor: string;
  classes: Record<string, string>;
  changeSettings: (color: string) => void;
};
const styles: StyleRulesCallback = theme => ({
  input: {
    marginTop: theme.spacing.unit * 2
  }
});

class ColorInput extends React.Component<Props, { color: string }> {
  constructor(props: Props) {
    super(props);
    this.state = {
      color: props.currentColor
    };
  }
  componentDidUpdate(nextProps: Props) {
    if (this.props.currentColor !== nextProps.currentColor) {
      this.setState({
        color: nextProps.currentColor
      });
    }
  }
  render() {
    const { currentColor, changeSettings, classes } = this.props;
    return (
      <Input
        className={classes.input}
        id={currentColor}
        value={this.state.color}
        onChange={event => {
          const isRgb = (color: string) =>
            /^#([0-9a-f]{3}|[0-9a-f]{6})$/i.test(color);
          const value = event.target.value;
          this.setState({ color: value }, () => {
            if (isRgb(value)) {
              changeSettings(value);
            }
          });
        }}
        inputProps={{
          'aria-label': `${capitalize(currentColor)} color`
        }}
        fullWidth={true}
      />
    );
  }
}

export default withStyles(styles)(ColorInput);
