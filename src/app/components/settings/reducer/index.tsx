import * as constants from '../constants';
import { State as GlobalState, Actions } from 'types';
import { ThemeOptions } from '@material-ui/core/styles/createMuiTheme';
import merge from 'deepmerge';

export type State = {
  readonly config: {
    readonly theme: ThemeOptions;
    readonly locale?: 'en' | 'ru';
  };
  readonly isLoading: boolean;
  readonly isSaving: boolean;
  readonly isSettingsOpen: boolean;
  readonly error: string | null;
};

const initialState: GlobalState['settingsReducer'] = {
  config: { theme: { typography: { htmlFontSize: 16 } }, locale: 'en' },
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
