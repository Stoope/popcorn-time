import React from 'react';
import messages from './index.messages';
import { showsActions } from '~/components/shows';
import MenuItem from '@material-ui/core/MenuItem';
import { injectIntl, InjectedIntlProps } from 'react-intl';
import Tooltip from '@material-ui/core/Tooltip';
import { withStyles, StyleRulesCallback } from '@material-ui/core/styles';
import { State } from 'types';
import Select from '@material-ui/core/Select';

type Props = {
  genre: State['showsReducer']['filter']['genre'];
  changeFilter: typeof showsActions.changeShowsFilter;
  classes: Record<string, string>;
} & InjectedIntlProps;

const styles: StyleRulesCallback = theme => ({
  root: {
    marginRight: theme.spacing.unit,
    marginLeft: theme.spacing.unit
  }
});

class GenreComponent extends React.Component<
  Props,
  {
    tooltipOpen: boolean;
  }
> {
  state = {
    tooltipOpen: false
  };
  openTooltip = () => {
    this.setState({ tooltipOpen: true });
  };
  closeTooltip = () => {
    this.setState({ tooltipOpen: false });
  };
  changeSort = (
    event: React.ChangeEvent<HTMLSelectElement>,
    child: React.ReactNode
  ) => {
    this.props.changeFilter({
      genre: event.target.value as State['showsReducer']['filter']['genre']
    });
  };
  render() {
    const { intl, genre, classes } = this.props;
    const { tooltipOpen } = this.state;
    return (
      <Tooltip
        placement="bottom"
        open={tooltipOpen}
        title={intl.formatMessage(messages.app_filter_genre)}
      >
        <Select
          value={genre}
          className={classes.root}
          onChange={this.changeSort}
          onMouseEnter={this.openTooltip}
          onMouseLeave={this.closeTooltip}
          onClick={this.closeTooltip}
        >
          <MenuItem value="all">
            <em>{intl.formatMessage(messages.app_filter_genre_all)}</em>
          </MenuItem>
          <MenuItem value="action">
            {intl.formatMessage(messages.app_filter_genre_action)}
          </MenuItem>
          <MenuItem value="adventure">
            {intl.formatMessage(messages.app_filter_genre_adventure)}
          </MenuItem>
          <MenuItem value="animation">
            {intl.formatMessage(messages.app_filter_genre_animation)}
          </MenuItem>
          <MenuItem value="comedy">
            {intl.formatMessage(messages.app_filter_genre_comedy)}
          </MenuItem>
          <MenuItem value="crime">
            {intl.formatMessage(messages.app_filter_genre_crime)}
          </MenuItem>
          <MenuItem value="disaster">
            {intl.formatMessage(messages.app_filter_genre_disaster)}
          </MenuItem>
          <MenuItem value="documentary">
            {intl.formatMessage(messages.app_filter_genre_documentary)}
          </MenuItem>
          <MenuItem value="drama">
            {intl.formatMessage(messages.app_filter_genre_drama)}
          </MenuItem>
          <MenuItem value="eastern">
            {intl.formatMessage(messages.app_filter_genre_eastern)}
          </MenuItem>
          <MenuItem value="fan-film">
            {intl.formatMessage(messages.app_filter_genre_fanFilm)}
          </MenuItem>
          <MenuItem value="fantasy">
            {intl.formatMessage(messages.app_filter_genre_fantasy)}
          </MenuItem>
          <MenuItem value="film-noir">
            {intl.formatMessage(messages.app_filter_genre_filmNoir)}
          </MenuItem>
          <MenuItem value="history">
            {intl.formatMessage(messages.app_filter_genre_history)}
          </MenuItem>
          <MenuItem value="holiday">
            {intl.formatMessage(messages.app_filter_genre_holiday)}
          </MenuItem>
          <MenuItem value="horror">
            {intl.formatMessage(messages.app_filter_genre_horror)}
          </MenuItem>
          <MenuItem value="indie">
            {intl.formatMessage(messages.app_filter_genre_indie)}
          </MenuItem>
          <MenuItem value="music">
            {intl.formatMessage(messages.app_filter_genre_music)}
          </MenuItem>
          <MenuItem value="mystery">
            {intl.formatMessage(messages.app_filter_genre_mystery)}
          </MenuItem>
          <MenuItem value="none">
            {intl.formatMessage(messages.app_filter_genre_none)}
          </MenuItem>
          <MenuItem value="road">
            {intl.formatMessage(messages.app_filter_genre_road)}
          </MenuItem>
          <MenuItem value="romance">
            {intl.formatMessage(messages.app_filter_genre_romance)}
          </MenuItem>
          <MenuItem value="science-fiction">
            {intl.formatMessage(messages.app_filter_genre_scienceFiction)}
          </MenuItem>
          <MenuItem value="short">
            {intl.formatMessage(messages.app_filter_genre_short)}
          </MenuItem>
          <MenuItem value="sports">
            {intl.formatMessage(messages.app_filter_genre_sports)}
          </MenuItem>
          <MenuItem value="sporting-event">
            {intl.formatMessage(messages.app_filter_genre_sportingEvent)}
          </MenuItem>
          <MenuItem value="suspense">
            {intl.formatMessage(messages.app_filter_genre_suspense)}
          </MenuItem>
          <MenuItem value="thriller">
            {intl.formatMessage(messages.app_filter_genre_thriller)}
          </MenuItem>
          <MenuItem value="tv-movie">
            {intl.formatMessage(messages.app_filter_genre_tvMovie)}
          </MenuItem>
          <MenuItem value="war">
            {intl.formatMessage(messages.app_filter_genre_war)}
          </MenuItem>
          <MenuItem value="western">
            {intl.formatMessage(messages.app_filter_genre_western)}
          </MenuItem>
        </Select>
      </Tooltip>
    );
  }
}

export default withStyles(styles)(injectIntl(GenreComponent));
