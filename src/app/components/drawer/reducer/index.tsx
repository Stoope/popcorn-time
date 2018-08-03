import * as constants from '../constants';
import { State as GlobalState, Actions } from 'types';

export type State = {
  readonly isDrawerOpen: boolean;
};

const initialState: GlobalState['drawerReducer'] = {
  isDrawerOpen: false
};

const reducer = (
  state: GlobalState['drawerReducer'] = initialState,
  action: Actions
): GlobalState['drawerReducer'] => {
  switch (action.type) {
    case constants.OPEN_DRAWER:
      return {
        ...state,
        isDrawerOpen: true
      };
    case constants.CLOSE_DRAWER:
      return {
        ...state,
        isDrawerOpen: false
      };
    default:
      return state;
  }
};

export default reducer;
