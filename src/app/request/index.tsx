import axios, { AxiosRequestConfig } from 'axios';
import store from '~/HOCs/ReduxWithMidleware/store';

const request = (config: AxiosRequestConfig) =>
  axios({ proxy: store.getState().settingsReducer.config.proxy, ...config });

export default request;
