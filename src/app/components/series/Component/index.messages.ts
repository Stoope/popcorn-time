import { defineMessages } from 'react-intl';

const messages = defineMessages({
  app_series_season: {
    id: 'app.series.season',
    defaultMessage:
      '{seasonsCount, number} {seasonsCount, plural, one {season} other {seasons}}',
    description: 'Form of season word(plural)'
  },
  app_series_title: {
    id: 'app.series.title',
    defaultMessage: 'Series',
    description: 'Series title'
  },
  app_series_searchPlaceholder: {
    id: 'app.series.searchPlaceholder',
    defaultMessage: 'Search…',
    description: 'Search series placeholder'
  }
});

export default messages;
