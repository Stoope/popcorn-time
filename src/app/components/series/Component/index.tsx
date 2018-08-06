import React from 'react';
import { connect } from 'react-redux';
import { State } from 'types';
import { seriesActions } from '~/components/series';
import InfiniteScroll from 'react-infinite-scroller';

type Props = {
  seriesReducer: State['seriesReducer'];
  resetSeries: typeof seriesActions.resetSeries;
  loadSeries: typeof seriesActions.loadSeries;
};

class DrawerComponent extends React.Component<Props> {
  componentDidMount() {
    this.props.resetSeries();
  }
  render() {
    const {
      seriesReducer: { hasMore, data },
      loadSeries
    } = this.props;
    return (
      <InfiniteScroll
        loadMore={loadSeries}
        hasMore={hasMore}
        loader={<div key={0}>загрузка...</div>}
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
    seriesReducer: state.seriesReducer
  }),
  {
    resetSeries: seriesActions.resetSeries,
    loadSeries: seriesActions.loadSeries
  }
)(DrawerComponent);
