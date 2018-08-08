import React from 'react';
import Masonry from './Masonry';
import { AutoSizer } from 'react-virtualized';
import InfiniteScroll from 'react-infinite-scroller';

type Props = {
  total: number;
  cellWidth: number;
  spacer?: number;
  hasMore: boolean;
  loadMore: (page: number) => void;
  cellRenderer: (index: number) => JSX.Element;
};

class GridComponent extends React.Component<Props> {
  render() {
    const {
      total,
      spacer = 16,
      cellRenderer,
      cellWidth,
      hasMore,
      loadMore
    } = this.props;
    return (
      <AutoSizer>
        {({ height, width }) => (
          <Masonry
            total={total}
            width={width}
            cellWidth={cellWidth}
            cellRenderer={cellRenderer}
            spacer={spacer}
            height={height}
            hasMore={hasMore}
            loadMore={loadMore}
          />
        )}
      </AutoSizer>
    );
  }
}

export default GridComponent;
