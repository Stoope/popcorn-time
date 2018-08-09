import React from 'react';
import Masonry from './Masonry';
import { AutoSizer } from 'react-virtualized';

type Props = {
  total: number;
  cellWidth: number;
  spacer?: number;
  hasMore: boolean;
  isLoadingItems: boolean;
  loadMore: (page: number) => void;
  cellRenderer: (index: number) => JSX.Element;
  keyMapper: (index: number) => any;
};

class GridComponent extends React.Component<Props> {
  render() {
    const {
      total,
      spacer = 16,
      cellRenderer,
      cellWidth,
      hasMore,
      loadMore,
      isLoadingItems,
      keyMapper
    } = this.props;
    return (
      <AutoSizer>
        {({ height, width }) => (
          <Masonry
            keyMapper={keyMapper}
            isLoadingItems={isLoadingItems}
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