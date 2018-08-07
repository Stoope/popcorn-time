import React from 'react';
import { connect } from 'react-redux';
import { State } from 'types';
import { seriesActions } from '~/components/series';
import InfiniteScroll from 'react-infinite-scroller';
import LinearProgress from '@material-ui/core/LinearProgress';
import Grid from '@material-ui/core/Grid';
import Card from './Card';

type Props = {
  hasMore: State['seriesReducer']['hasMore'];
  data: State['seriesReducer']['data'];
  resetSeries: typeof seriesActions.resetSeries;
  loadSeries: typeof seriesActions.loadSeries;
};

class GridComponent extends React.Component<Props> {
  componentDidMount() {
    this.props.resetSeries();
  }
  render() {
    const { hasMore, data, loadSeries } = this.props;
    return (
      <InfiniteScroll
        loadMore={loadSeries}
        hasMore={hasMore}
        loader={<LinearProgress key={0} />}
        useWindow={false}
      >
        <Grid container={true} spacing={16}>
          {data.map(item => (
            <Grid key={item._id} item={true} xs="auto">
              <Card item={item} />
            </Grid>
          ))}
        </Grid>
      </InfiniteScroll>
    );
  }
}

export default connect(
  (state: State) => ({
    hasMore: state.seriesReducer.hasMore,
    data: state.seriesReducer.data
  }),
  {
    resetSeries: seriesActions.resetSeries,
    loadSeries: seriesActions.loadSeries
  }
)(GridComponent);
