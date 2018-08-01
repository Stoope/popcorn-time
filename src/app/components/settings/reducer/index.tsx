import * as constants from '../constants';
import { State as GlobalState, Actions } from '~types';
import merge from 'deepmerge';

export type State = {
  readonly config?: {
    readonly theme?: {
      readonly type?: 'dark' | 'light';
      readonly fontSize?: string;
    };
  };
  readonly isLoading?: boolean;
  readonly isSaving?: boolean;
  readonly isSettingsOpen?: boolean;
  readonly error?: string;
};

const initialState: GlobalState['settingsReducer'] = {
  config: { theme: { type: 'dark', fontSize: '18px' } },
  isLoading: false,
  isSaving: false,
  isSettingsOpen: false,
  error: null
};

const reducer = (
  state: GlobalState['settingsReducer'] = initialState,
  action: Actions
): GlobalState['settingsReducer'] => {
  switch (action.type) {
    case constants.OPEN_SETTINGS:
      return {
        ...state,
        isSettingsOpen: true
      };
    case constants.CLOSE_SETTINGS:
      return {
        ...state,
        isSettingsOpen: false
      };
    case constants.CHANGE_SETTINGS:
      return {
        ...state,
        config: merge(state.config, action.payload)
      };
    case constants.SAVE_SETTINGS:
      return {
        ...state,
        isSaving: true
      };
    case constants.SAVE_SETTINGS_SUCCESS:
      return {
        ...state,
        isSaving: false
      };
    case constants.SAVE_SETTINGS_ERROR:
      return {
        ...state,
        error: action.payload
      };
    case constants.LOAD_SETTINGS:
      return {
        ...state,
        isLoading: true
      };
    case constants.LOAD_SETTINGS_SUCCESS:
      return {
        ...state,
        config: action.payload,
        isLoading: false
      };
    case constants.LOAD_SETTINGS_ERROR:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
