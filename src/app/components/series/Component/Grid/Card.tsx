import React from 'react';
import { State } from 'types';
import Card from '@material-ui/core/Card';
import messages from '../index.messages';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { withStyles, StyleRulesCallback } from '@material-ui/core/styles';
import { injectIntl, InjectedIntlProps } from 'react-intl';

type Props = {
  item: State['seriesReducer']['data'][0];
  classes: Record<string, string>;
} & InjectedIntlProps;

const styles: StyleRulesCallback = () => ({
  media: {
    height: 0,
    paddingTop: '150%'
  },
  card: {
    width: 'calc(100% - 6px)',
    marginLeft: 'auto',
    marginRight: 'auto'
  }
});

class CardComponent extends React.Component<Props> {
  render() {
    const {
      item: {
        title,
        images: { poster },
        year,
        num_seasons
      },
      classes,
      intl
    } = this.props;
    return (
      <Card className={classes.card}>
        <CardMedia className={classes.media} image={poster} title={title} />
        <CardContent>
          <Grid container={true} spacing={8}>
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
              <Typography
                title={intl.formatMessage(messages.drawer_series_season, {
                  seasonsCount: num_seasons
                })}
                noWrap={true}
                variant="caption"
                align="right"
              >
                {intl.formatMessage(messages.drawer_series_season, {
                  seasonsCount: num_seasons
                })}
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    );
  }
}

export default withStyles(styles)(injectIntl(CardComponent));
