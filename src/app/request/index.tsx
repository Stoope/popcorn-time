import axios, { AxiosRequestConfig } from 'axios';
import store from '~/HOCs/ReduxWithMidleware/store';

const request = (config: AxiosRequestConfig) =>
  axios({ proxy: store ? store.getState().settingsReducer.config.proxy : false, ...config });

export default request;
