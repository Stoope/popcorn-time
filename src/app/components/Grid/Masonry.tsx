import React from 'react';
import {
  Masonry,
  CellMeasurerCache,
  createMasonryCellPositioner,
  Positioner,
  CellMeasurer,
  OnScrollCallback
} from 'react-virtualized';
import LinearProgress from '@material-ui/core/LinearProgress';
import { withStyles, StyleRulesCallback } from '@material-ui/core/styles';

type Props = {
  height: number;
  width: number;
  total: number;
  spacer: number;
  cellWidth: number;
  hasMore: boolean;
  isLoadingItems: boolean;
  loadMore: (page: number) => void;
  cellRenderer: (index: number) => JSX.Element;
  keyMapper: (index: number) => any;
  classes: Record<string, string>;
};
const styles: StyleRulesCallback = theme => ({
  masonry: {
    '&:focus': {
      outline: 'none'
    }
  }
});

class MasonryComponent extends React.Component<Props, { currentPage: number }> {
  cache: CellMeasurerCache;
  cellPositioner: Positioner;
  masonryRef: Masonry | null = null;

  constructor(props: Props) {
    super(props);
    this.state = { currentPage: 1 };
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

  onScroll: OnScrollCallback = ({ clientHeight, scrollHeight, scrollTop }) => {
    const offset = scrollHeight - scrollTop - clientHeight;
    if (offset < 500 && !this.props.isLoadingItems) {
      this.props.loadMore(this.state.currentPage);
      this.setState(prevState => ({ currentPage: prevState.currentPage + 1 }));
    }
  };

  render() {
    const {
      height,
      width,
      total,
      cellRenderer,
      spacer,
      keyMapper,
      classes
    } = this.props;
    return (
      <Masonry
        className={classes.masonry}
        style={{ padding: spacer }}
        cellCount={total}
        keyMapper={keyMapper}
        onScroll={this.onScroll}
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
    );
  }
}

export default withStyles(styles)(MasonryComponent);
