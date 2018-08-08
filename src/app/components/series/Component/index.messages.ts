import { defineMessages } from 'react-intl';

const messages = defineMessages({
  drawer_series_season: {
    id: 'app.series.season',
    defaultMessage:
      '{seasonsCount, number} {seasonsCount, plural, one {season} other {seasons}}',
    description: 'Form of season word(plural)'
  }
});

export default messages;
