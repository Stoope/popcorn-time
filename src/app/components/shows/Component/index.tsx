import React from 'react';
import { withStyles, StyleRulesCallback } from '@material-ui/core/styles';
import Grid from './Grid';
import { injectIntl, InjectedIntlProps } from 'react-intl';
import messages from './index.messages';
import PageBar from './PageBar';

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
  } & InjectedIntlProps
> {
  render() {
    return (
      <div className={this.props.classes.root}>
        <PageBar
          title={this.props.intl.formatMessage(messages.app_shows_title)}
        />
        <Grid />
      </div>
    );
  }
}

export default withStyles(styles)(injectIntl(ShowsComponent));
