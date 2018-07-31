// @flow
import type { Action } from '../actions';
import {
  CHANGE_SETTINGS,
  SAVE_SETTINGS,
  SAVE_SETTINGS_SUCCESS,
  SAVE_SETTINGS_ERROR,
  LOAD_SETTINGS,
  LOAD_SETTINGS_SUCCESS,
  LOAD_SETTINGS_ERROR
} from '../constants';
import merge from 'lodash/merge';
import cloneDeep from 'lodash/cloneDeep';

export type Theme = {
  type?: 'light' | 'dark',
  fontSize?: string
};
export type Config = {
  theme?: Theme
};
export type State = {
  +config: Config,
  +error: ?string,
  +isLoading: boolean,
  +isSaving: boolean
};

const initialState: State = {
  config: { theme: { type: 'dark', fontSize: '18px' } },
  isLoading: false,
  isSaving: false,
  error: null
};

const reducer = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case CHANGE_SETTINGS:
      return {
        ...state,
        config: cloneDeep(merge(state.config, action.payload)) // TODO
      };
    case SAVE_SETTINGS:
      return {
        ...state,
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
