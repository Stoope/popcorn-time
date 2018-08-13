import { defineMessages } from 'react-intl';

const messages = defineMessages({
  app_shows_season: {
    id: 'app.shows.season',
    defaultMessage:
      '{seasonsCount, number} {seasonsCount, plural, one {season} other {seasons}}',
    description: 'Form of season word(plural)'
  },
  app_shows_title: {
    id: 'app.shows.title',
    defaultMessage: 'Shows',
    description: 'Shows title'
  }
});

export default messages;
