import React from 'react';
import { State } from 'types';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { withStyles, StyleRulesCallback } from '@material-ui/core/styles';

type Props = {
  item: State['seriesReducer']['data'][0];
  classes: Record<string, string>;
};

const styles: StyleRulesCallback = () => ({
  media: {
    height: 0,
    paddingTop: '150%'
  },
  card: {
    width: 200
  }
});

class CardComponent extends React.Component<Props> {
  render() {
    const {
      item: {
        title,
        images: { poster },
        year
      },
      classes
    } = this.props;
    return (
      <Card className={classes.card}>
        <CardMedia className={classes.media} image={poster} title={title} />
        <CardContent><Grid container={true} spacing={8}>
          <Grid item={true} xs={12}>
            <Typography title={title} noWrap={true} variant="subheading">
              {title}
            </Typography>
          </Grid>
          <Grid item={true} xs={6}>
            <Typography title={year} noWrap={true} variant="caption">
              {year}
            </Typography>
          </Grid>
          <Grid item={true} xs={6}>
            <Typography title={year} noWrap={true} variant="caption" align="right">
              {year}
            </Typography>
          </Grid>
        </Grid>
        </CardContent>
      </Card>
    );
  }
}

export default withStyles(styles)(CardComponent);
