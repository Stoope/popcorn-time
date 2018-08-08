import React from 'react';
import {
  Masonry,
  CellMeasurerCache,
  createMasonryCellPositioner,
  Positioner,
  CellMeasurer
} from 'react-virtualized';
import InfiniteScroll from './InfiniteScroll';
import LinearProgress from '@material-ui/core/LinearProgress';

type Props = {
  height: number;
  width: number;
  total: number;
  spacer: number;
  cellWidth: number;
  cellRenderer: (index: number) => JSX.Element;
};

class MasonryComponent extends React.Component<Props> {
  cache: CellMeasurerCache;
  cellPositioner: Positioner;
  masonryRef: Masonry | null = null;
  constructor(props: Props) {
    super(props);
    this.cache = new CellMeasurerCache({
      defaultWidth: props.cellWidth,
      fixedWidth: true
    });
    this.cellPositioner = createMasonryCellPositioner({
      cellMeasurerCache: this.cache,
      columnCount: Math.floor(props.width / (props.cellWidth + props.spacer)),
      columnWidth: props.cellWidth,
      spacer: props.spacer
    });
  }
  componentDidUpdate(prevProps: Props) {
    if (
      prevProps.height !== this.props.height ||
      prevProps.width !== this.props.width
    ) {
      this.cellPositioner.reset({
        columnCount: Math.floor(
          this.props.width / (this.props.cellWidth + this.props.spacer)
        ),
        columnWidth: this.props.cellWidth,
        spacer: this.props.spacer
      });
      this.masonryRef && this.masonryRef.recomputeCellPositions();
    }
  }
  setMasonryRef = (ref: Masonry) => {
    this.masonryRef = ref;
  };
  render() {
    const {
      height,
      width,
      total,
      cellRenderer,
      hasMore,
      loadMore
    } = this.props;
    const el = document.getElementsByClassName('ReactVirtualized__Masonry')[0];
    return (
      <InfiniteScroll
        scrollElement={el}
        loadMore={loadMore}
        hasMore={hasMore}
        loader={<LinearProgress key={0} />}
        useWindow={false}
      >
        <Masonry
          cellCount={total}
          autoHeight={false}
          cellMeasurerCache={this.cache}
          cellPositioner={this.cellPositioner}
          cellRenderer={({ index, key, parent, style }) => (
            <CellMeasurer
              cache={this.cache}
              index={index}
              key={key}
              parent={parent}
            >
              <div style={style}>{cellRenderer(index)}</div>
            </CellMeasurer>
          )}
          ref={this.setMasonryRef}
          width={width}
          height={height}
        />
      </InfiniteScroll>
    );
  }
}

export default MasonryComponent;
