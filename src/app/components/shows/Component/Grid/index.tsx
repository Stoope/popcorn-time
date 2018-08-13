import React from 'react';
import { connect } from 'react-redux';
import { State } from 'types';
import { showsActions } from '~/components/shows';
import Grid from '~/components/Grid';
import Card from './Card';

type Props = {
  hasMore: State['showsReducer']['hasMore'];
  data: State['showsReducer']['data'];
  isLoading: State['showsReducer']['isLoading'];
  scrollTopPosition: State['showsReducer']['scrollTopPosition'];
  filter: State['showsReducer']['filter'];
  loadShows: typeof showsActions.loadShows;
  changeScrollPosition: typeof showsActions.changeShowsScrollPosition;
};

class GridComponent extends React.Component<Props> {
  keyMapper = (index: number) => {
    return this.props.data[index] ? this.props.data[index]._id : index;
  };
  render() {
    const {
      hasMore,
      data,
      loadShows,
      changeScrollPosition,
      scrollTopPosition,
      filter,
      isLoading
    } = this.props;
    return (
      <Grid
        key={JSON.stringify(filter)}
        keyMapper={this.keyMapper}
        changeScrollPosition={changeScrollPosition}
        scrollTopPosition={scrollTopPosition}
        isLoadingItems={isLoading}
        total={data.length}
        loadMore={loadShows}
        hasMore={hasMore}
        cellWidth={206}
        cellRenderer={index => <Card item={data[index]} />}
      />
    );
  }
}

export default connect(
  (state: State) => ({
    hasMore: state.showsReducer.hasMore,
    data: state.showsReducer.data,
    filter: state.showsReducer.filter,
    scrollTopPosition: state.showsReducer.scrollTopPosition,
    isLoading: state.showsReducer.isLoading
  }),
  {
    loadShows: showsActions.loadShows,
    changeScrollPosition: showsActions.changeShowsScrollPosition
  }
)(GridComponent);
