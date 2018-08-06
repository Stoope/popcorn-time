import * as seriesActions from './actions';
import * as seriesSagas from './sagas';
import seriesReducer, { State as SeriesState } from './reducer';
import SeriesComponent from './Component';

export {
  seriesReducer,
  SeriesComponent,
  seriesActions,
  SeriesState,
  seriesSagas
};
