import React from 'react';
import { connect } from 'react-redux';
import { State } from 'types';

type Props = {
  isDrawerOpen: State['drawerReducer']['isDrawerOpen'];
};

class DrawerComponent extends React.Component<Props> {
  render() {
    return <div>dfdfdf</div>;
  }
}

export default connect((state: State) => ({
  isDrawerOpen: state.drawerReducer.isDrawerOpen
}))(DrawerComponent);
