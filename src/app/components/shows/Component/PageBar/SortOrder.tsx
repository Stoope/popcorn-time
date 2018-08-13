import React from 'react';
import messages from '../index.messages';
import { showsActions } from '~/components/shows';
import Sort from '@material-ui/icons/Sort';
import IconButton from '@material-ui/core/IconButton';
import { injectIntl, InjectedIntlProps } from 'react-intl';
import classNames from 'classnames';
import Tooltip from '@material-ui/core/Tooltip';
import { withStyles, StyleRulesCallback } from '@material-ui/core/styles';
import { State } from 'types';

type Props = {
  order: State['showsReducer']['filter']['order'];
  changeFilter: typeof showsActions.changeShowsFilter;
  classes: Record<string, string>;
} & InjectedIntlProps;

const styles: StyleRulesCallback = theme => ({
  root: {
    marginRight: theme.spacing.unit,
    marginLeft: theme.spacing.unit
  },
  sort: {
    transitionDuration: '0.5s',
    transitionProperty: 'transform'
  },
  sortReverse: {
    transform: 'rotateX(180deg)'
  }
});

class SortOrderComponent extends React.Component<Props> {
  changeSortOrder = () => {
    this.props.changeFilter({ order: this.props.order === -1 ? 1 : -1 });
  };
  render() {
    const { intl, order, classes } = this.props;
    return (
      <Tooltip
        disableFocusListener={true}
        placement="bottom"
        title={intl.formatMessage(messages.app_shows_sortDirection)}
      >
        <IconButton className={classes.root} onClick={this.changeSortOrder}>
          <Sort
            className={classNames(
              classes.sort,
              order === 1 && classes.sortReverse
            )}
          />
        </IconButton>
      </Tooltip>
    );
  }
}

export default withStyles(styles)(injectIntl(SortOrderComponent));
