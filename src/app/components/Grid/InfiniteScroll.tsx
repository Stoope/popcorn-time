import React from 'react';
import InfiniteScroll from 'react-infinite-scroller';

class InfiniteScrollComponent extends InfiniteScroll {
  getParentElement(el) {
    console.log(this.props.scrollElement);
    if (this.props.scrollElement) {
      return this.props.scrollElement;
    }
    return null;
    return super.getParentElement(el);
  }

  render() {
    return super.render();
  }
}

export default InfiniteScrollComponent;
