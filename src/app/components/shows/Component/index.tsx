import React from 'react';
import { connect } from 'react-redux';
import { showsActions } from '~/components/shows';
import { withStyles, StyleRulesCallback } from '@material-ui/core/styles';
import Grid from './Grid';
import { State } from 'types';
import { injectIntl, InjectedIntlProps } from 'react-intl';
import messages from './index.messages';
import PageBar from '~/components/PageBar';

const styles: StyleRulesCallback = () => ({
  root: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
  }
});

class ShowsComponent extends React.Component<
  {
    classes: Record<string, string>;
    filter: State['showsReducer']['filter'];
    changeFilter: typeof showsActions.changeShowsFilter;
  } & InjectedIntlProps
> {
  render() {
    const { classes, intl, filter, changeFilter } = this.props;
    return (
      <div className={classes.root}>
        <PageBar
          filter={filter}
          changeFilter={changeFilter}
          title={intl.formatMessage(messages.app_shows_title)}
        />
        <Grid />
      </div>
    );
  }
}

export default connect(
  (state: State) => ({
    filter: state.showsReducer.filter
  }),
  {
    changeFilter: showsActions.changeShowsFilter
  }
)(withStyles(styles)(injectIntl(ShowsComponent)));
