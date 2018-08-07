import React from 'react';
import { State } from 'types';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { withStyles, StyleRulesCallback } from '@material-ui/core/styles';

type Props = {
  item: State['seriesReducer']['data'][0];
  classes: Record<string, string>;
};

const styles: StyleRulesCallback = theme => ({
  media: {
    height: 0,
    paddingTop: '150%'
  }
});

class CardComponent extends React.Component<Props> {
  render() {
    const {
      item: {
        title,
        images: { banner }
      },
      classes
    } = this.props;
    return (
      <Card>
        <CardMedia className={classes.media} image={banner} title={title} />
        <CardContent>
          <Typography gutterBottom={true} variant="subheading">
            {title}
          </Typography>
        </CardContent>
      </Card>
    );
  }
}

export default withStyles(styles)(CardComponent);
