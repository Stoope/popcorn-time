import React from 'react';
import messages from './index.messages';
import MenuItem from '@material-ui/core/MenuItem';
import { injectIntl, InjectedIntlProps } from 'react-intl';
import Tooltip from '@material-ui/core/Tooltip';
import { withStyles, StyleRulesCallback } from '@material-ui/core/styles';
import Select from '@material-ui/core/Select';

type Props = {
  sort: Filter['sort'];
  changeFilter: (filter: Filter) => any;
  classes: Record<string, string>;
} & InjectedIntlProps;

const styles: StyleRulesCallback = theme => ({
  root: {
    marginRight: theme.spacing.unit,
    marginLeft: theme.spacing.unit
  }
});

class SortByComponent extends React.Component<
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
      sort: event.target.value as Filter['sort']
    });
  };
  render() {
    const { intl, sort, classes } = this.props;
    const { tooltipOpen } = this.state;
    return (
      <Tooltip
        placement="bottom"
        open={tooltipOpen}
        title={intl.formatMessage(messages.app_filter_sortBy)}
      >
        <Select
          value={sort}
          className={classes.root}
          onChange={this.changeSort}
          onMouseEnter={this.openTooltip}
          onMouseLeave={this.closeTooltip}
          onClick={this.closeTooltip}
        >
          <MenuItem value="name">
            {intl.formatMessage(messages.app_filter_sort_name)}
          </MenuItem>
          <MenuItem value="rating">
            {intl.formatMessage(messages.app_filter_sort_rating)}
          </MenuItem>
          <MenuItem value="trending">
            {intl.formatMessage(messages.app_filter_sort_trending)}
          </MenuItem>
          <MenuItem value="updated">
            {intl.formatMessage(messages.app_filter_sort_updated)}
          </MenuItem>
          <MenuItem value="year">
            {intl.formatMessage(messages.app_filter_sort_year)}
          </MenuItem>
        </Select>
      </Tooltip>
    );
  }
}

export default withStyles(styles)(injectIntl(SortByComponent));
