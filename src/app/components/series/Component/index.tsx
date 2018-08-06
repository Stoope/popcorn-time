import React from 'react';
import { connect } from 'react-redux';
import { State } from 'types';
import { seriesActions } from '~/components/series';
import InfiniteScroll from 'react-infinite-scroller';
import LinearProgress from '@material-ui/core/LinearProgress';

type Props = {
  hasMore: State['seriesReducer']['hasMore'];
  data: State['seriesReducer']['data'];
  seriesReducer: State['seriesReducer'];
  resetSeries: typeof seriesActions.resetSeries;
  loadSeries: typeof seriesActions.loadSeries;
};

class DrawerComponent extends React.Component<Props> {
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
        {data.map(item => (
          <div key={item._id}>
            {item.slug}
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
          </div>
        ))}
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
)(DrawerComponent);
