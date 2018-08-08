import React from 'react';
import Masonry from './Masonry';
import { AutoSizer } from 'react-virtualized';
import InfiniteScroll from 'react-infinite-scroller';
import LinearProgress from '@material-ui/core/LinearProgress';

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
          <div style={{ height, width, overflow: 'auto' }}>
            <InfiniteScroll
              loadMore={loadMore}
              hasMore={hasMore}
              loader={<LinearProgress key={0} />}
              useWindow={false}
            >
              <Masonry
                total={total}
                width={width}
                cellWidth={cellWidth}
                cellRenderer={cellRenderer}
                spacer={spacer}
                height={height}
              />
            </InfiniteScroll>
          </div>
        )}
      </AutoSizer>
    );
  }
}

export default GridComponent;
