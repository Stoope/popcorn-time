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
  },
  app_shows_searchPlaceholder: {
    id: 'app.shows.searchPlaceholder',
    defaultMessage: 'Search…',
    description: 'Search shows placeholder'
  },
  app_shows_searchTooltip: {
    id: 'app.shows.searchTooltip',
    defaultMessage: 'Search',
    description: 'Search tooltip'
  },
  app_shows_sortDirection: {
    id: 'app.shows.sortDirection',
    defaultMessage: 'Sort direction',
    description: 'Sort direction tooltip'
  }
});

export default messages;
