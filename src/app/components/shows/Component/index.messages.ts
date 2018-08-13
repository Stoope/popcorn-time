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
  },
  app_shows_sortBy: {
    id: 'app.shows.sortBy',
    defaultMessage: 'Sort by',
    description: 'Sort by tooltip'
  },
  app_shows_sort_name: {
    id: 'app.shows.sort.name',
    defaultMessage: 'Name',
    description: 'Name sort item'
  },
  app_shows_sort_rating: {
    id: 'app.shows.sort.rating',
    defaultMessage: 'Rating',
    description: 'Rating sort item'
  },
  app_shows_sort_trending: {
    id: 'app.shows.sort.trending',
    defaultMessage: 'Trending',
    description: 'Trending sort item'
  },
  app_shows_sort_updated: {
    id: 'app.shows.sort.updated',
    defaultMessage: 'Updated',
    description: 'Updated sort item'
  },
  app_shows_sort_year: {
    id: 'app.shows.sort.year',
    defaultMessage: 'Year',
    description: 'Year sort item'
  }
});

export default messages;
