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
  resetSeries: typeof seriesActions.resetSeries;
  loadSeries: typeof seriesActions.loadSeries;
};

class GridComponent extends React.Component<Props> {
  componentDidMount() {
    this.props.resetSeries();
  }
  keyMapper = (index: number) => {
    return this.props.data[index] ? this.props.data[index]._id : index;
  };
  render() {
    const { hasMore, data, loadSeries, isLoading } = this.props;
    return (
      <Grid
        keyMapper={this.keyMapper}
        isLoadingItems={isLoading}
        total={data.length}
        loadMore={loadSeries}
        hasMore={hasMore}
        cellWidth={200}
        cellRenderer={index => <Card item={data[index]} />}
      />
    );
  }
}

export default connect(
  (state: State) => ({
    hasMore: state.seriesReducer.hasMore,
    data: state.seriesReducer.data,
    isLoading: state.seriesReducer.isLoading
  }),
  {
    resetSeries: seriesActions.resetSeries,
    loadSeries: seriesActions.loadSeries
  }
)(GridComponent);
