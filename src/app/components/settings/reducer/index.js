// @flow
import type { Action } from '../actions';
import {
  SAVE_SETTINGS,
  SAVE_SETTINGS_SUCCESS,
  SAVE_SETTINGS_ERROR,
  LOAD_SETTINGS,
  LOAD_SETTINGS_SUCCESS,
  LOAD_SETTINGS_ERROR
} from '../constants';

export type Config = {
  type?: 'light' | 'dark'
};
export type State = {
  +config: Config,
  +error: ?string,
  +isLoading: boolean,
  +isSaving: boolean
};

const initialState: State = {
  config: { type: 'dark' },
  isLoading: false,
  isSaving: false,
  error: null
};

const reducer = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case SAVE_SETTINGS:
      return {
        ...state,
        config: { ...state.config, ...action.payload },
        isSaving: true
      };
    case SAVE_SETTINGS_SUCCESS:
      return {
        ...state,
        isSaving: false
      };
    case SAVE_SETTINGS_ERROR:
      return {
        ...state,
        error: action.payload
      };
    case LOAD_SETTINGS:
      return {
        ...state,
        isLoading: true
      };
    case LOAD_SETTINGS_SUCCESS:
      return {
        ...state,
        config: action.payload,
        isLoading: false
      };
    case LOAD_SETTINGS_ERROR:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
