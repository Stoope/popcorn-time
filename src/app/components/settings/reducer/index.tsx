import * as constants from '../constants';
import { State as GlobalState, Actions } from 'types';
import { ThemeOptions } from '@material-ui/core/styles/createMuiTheme';
import merge from 'deepmerge';

export type State = {
  readonly config: {
    readonly theme: ThemeOptions;
    readonly locale?: 'en' | 'ru';
    readonly series: {
      APIs: Array<{ url: string }>;
    };
  };
  readonly isSettingsOpen: boolean;
};

const initialState: GlobalState['settingsReducer'] = {
  config: {
    theme: { typography: { htmlFontSize: 16 } },
    locale: 'en',
    series: {
      APIs: [
        {
          url: 'http://eztv.is/api/'
        },
        {
          url: 'https://api-fetch.website/tv/'
        },
        {
          url: 'https://eztvapi.ml/'
        },
        {
          url: 'https://popcorntime.ws/api/eztv/'
        },
        {
          url: 'https://popcorntimece.ch/api/eztv/'
        }
      ]
    }
  },
  isSettingsOpen: false
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
        config: merge(state.config, action.payload, {
          arrayMerge: (destination, source) => source
        })
      };
    default:
      return state;
  }
};

export default reducer;
