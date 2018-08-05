import axios, { AxiosProxyConfig } from 'axios';
import store from '~/HOCs/ReduxWithMidleware/store';

const baseUrl = 'https://tv-v2.api-fetch.website';

const popcornAPI = {
  getTotal: async (proxy: AxiosProxyConfig | false = false) => {
    const result = await axios.get(baseUrl + '/status', { proxy });
    return { total: result.data.totalShows, updated: result.data.updated };
  }
};

export default popcornAPI;
