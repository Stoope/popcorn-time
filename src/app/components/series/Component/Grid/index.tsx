import React from 'react';
import { connect } from 'react-redux';
import { State } from 'types';
import { seriesActions } from '~/components/series';
import Grid from '~/components/Grid';
import Card from './Card';

type Props = {
  hasMore: State['seriesReducer']['hasMore'];
  data: State['seriesReducer']['data'];
  isLoading: State['seriesReducer']['isLoading'];
  scrollTopPosition: State['seriesReducer']['scrollTopPosition'];
  loadSeries: typeof seriesActions.loadSeries;
  changeScrollPosition: typeof seriesActions.changeSeriesScrollPosition;
};

class GridComponent extends React.Component<Props> {
  keyMapper = (index: number) => {
    return this.props.data[index] ? this.props.data[index]._id : index;
  };
  render() {
    const {
      hasMore,
      data,
      loadSeries,
      changeScrollPosition,
      scrollTopPosition,
      isLoading
    } = this.props;
    return (
      <Grid
        keyMapper={this.keyMapper}
        changeScrollPosition={changeScrollPosition}
        scrollTopPosition={scrollTopPosition}
        isLoadingItems={isLoading}
        total={data.length}
        loadMore={loadSeries}
        hasMore={hasMore}
        cellWidth={206}
        cellRenderer={index => <Card item={data[index]} />}
      />
    );
  }
}

export default connect(
  (state: State) => ({
    hasMore: state.seriesReducer.hasMore,
    data: state.seriesReducer.data,
    scrollTopPosition: state.seriesReducer.scrollTopPosition,
    isLoading: state.seriesReducer.isLoading
  }),
  {
    loadSeries: seriesActions.loadSeries,
    changeScrollPosition: seriesActions.changeSeriesScrollPosition
  }
)(GridComponent);
