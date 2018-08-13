import React from 'react';
import { connect } from 'react-redux';
import { State } from 'types';
import { showsActions } from '~/components/shows';
import AppBar from '@material-ui/core/AppBar';
import messages from '../index.messages';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { injectIntl, InjectedIntlProps } from 'react-intl';
import { withStyles, StyleRulesCallback } from '@material-ui/core/styles';
import Search from './Search';

type Props = {
  filter: State['showsReducer']['filter'];
  changeFilter: typeof showsActions.changeShowsFilter;
  classes: Record<string, string>;
} & InjectedIntlProps;

const styles: StyleRulesCallback = () => ({
  grow: {
    flex: '1 1 auto'
  }
});

class PageBarComponent extends React.Component<Props> {
  render() {
    const {
      intl,
      classes,
      filter: { keywords = '' },
      changeFilter
    } = this.props;
    return (
      <AppBar position="static" color="default">
        <Toolbar>
          <Typography variant="title" color="inherit">
            {intl.formatMessage(messages.app_shows_title)}
          </Typography>
          <div className={classes.grow} />
          <Search value={keywords} changeFilter={changeFilter} />
        </Toolbar>
      </AppBar>
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
)(withStyles(styles)(injectIntl(PageBarComponent)));
