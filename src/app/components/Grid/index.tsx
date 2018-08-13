import React from 'react';
import Masonry from './Masonry';
import { AutoSizer } from 'react-virtualized';
import { withStyles, StyleRulesCallback } from '@material-ui/core/styles';

type Props = {
  total: number;
  cellWidth: number;
  spacer?: number;
  hasMore: boolean;
  isLoadingItems: boolean;
  scrollTopPosition: number;
  classes: Record<string, string>;
  loadMore: (page: number) => void;
  cellRenderer: (index: number) => JSX.Element;
  keyMapper: (index: number) => any;
  changeScrollPosition: (scrollTopPosition: number) => any;
};
const styles: StyleRulesCallback = () => ({
  root: {
    flexGrow: 1
  }
});

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
      scrollTopPosition,
      changeScrollPosition,
      keyMapper,
      classes
    } = this.props;
    return (
      <div className={classes.root}>
        <AutoSizer>
          {({ height, width }) => (
            <Masonry
              keyMapper={keyMapper}
              scrollTopPosition={scrollTopPosition}
              changeScrollPosition={changeScrollPosition}
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
      </div>
    );
  }
}

export default withStyles(styles)(GridComponent);
