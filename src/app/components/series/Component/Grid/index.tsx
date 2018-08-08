import React from 'react';
import { connect } from 'react-redux';
import { State } from 'types';
import { seriesActions } from '~/components/series';
import Grid from '~/components/Grid';
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
      <Grid
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
    data: state.seriesReducer.data
  }),
  {
    resetSeries: seriesActions.resetSeries,
    loadSeries: seriesActions.loadSeries
  }
)(GridComponent);
