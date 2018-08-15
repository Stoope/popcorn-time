import React from 'react';
import { State } from 'types';
import Card from '~/components/Card';
import messages from '../index.messages';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { injectIntl, InjectedIntlProps } from 'react-intl';

type Props = {
  item: State['showsReducer']['data'][0];
  searchValue: string;
} & InjectedIntlProps;

class CardComponent extends React.Component<Props> {
  render() {
    const {
      item: {
        title,
        images: { poster },
        year,
        num_seasons
      },
      searchValue,
      intl
    } = this.props;
    return (
      <Card searchValue={searchValue} title={title} poster={poster}>
        <Grid item={true} xs={6}>
          <Typography title={year} noWrap={true} variant="caption">
            {year}
          </Typography>
        </Grid>
        <Grid item={true} xs={6}>
          <Typography
            title={intl.formatMessage(messages.app_shows_season, {
              seasonsCount: num_seasons
            })}
            noWrap={true}
            variant="caption"
            align="right"
          >
            {intl.formatMessage(messages.app_shows_season, {
              seasonsCount: num_seasons
            })}
          </Typography>
        </Grid>
      </Card>
    );
  }
}

export default injectIntl(CardComponent);
