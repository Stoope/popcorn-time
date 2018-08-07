import axios, { AxiosProxyConfig } from 'axios';
import queryString from 'query-string';
import memoize from 'memoizee';
import { Filter } from '../';

const baseUrl = 'https://tv-v2.api-fetch.website';

type Serie = {
  _id: string;
  imdb_id: string;
  tvdb_id: string;
  title: string;
  year: string;
  slug: string;
  num_seasons: number;
  images: {
    poster: string;
    fanart: string;
    banner: string;
  };
  rating: {
    percentage: number;
    watching: number;
    votes: number;
    loved: number;
    hated: number;
  };
};
type SerieDetails = {
  _id: string;
  imdb_id: string;
  tvdb_id: string;
  title: string;
  year: string;
  slug: string;
  synopsis: string;
  runtime: string;
  country: string;
  network: string;
  air_day: string;
  air_time: string;
  status: string;
  num_seasons: number;
  last_updated: number;
  __v: number;
  episodes: Array<{
    torrents: {
      [key: string]: {
        provider: string;
        peers: number;
        seeds: number;
        url: string;
      };
    };
    watched: { watched: boolean };
    first_aired: number;
    date_based: boolean;
    overview: string;
    title: string;
    episode: number;
    season: number;
    tvdb_id: number;
  }>;
  genres: string[];
  images: {
    poster: string;
    fanart: string;
    banner: string;
  };
  rating: {
    percentage: number;
    watching: number;
    votes: number;
    loved: number;
    hated: number;
  };
};

const shows = {
  getPages: async (
    proxy: AxiosProxyConfig | false = false
  ): Promise<string[]> => {
    const result = await axios.get(`${baseUrl}/shows`, { proxy });
    return result.data;
  },
  getTotal: async (
    proxy: AxiosProxyConfig | false = false
  ): Promise<{ total: number; updated: number }> => {
    const result = await axios.get(`${baseUrl}/status`, { proxy });
    return { total: result.data.totalShows, updated: result.data.updated };
  },
  getPage: async (
    { page = 1, ...filter }: Filter,
    proxy: AxiosProxyConfig | false = false
  ): Promise<Serie[]> => {
    const result = await axios.get(
      `${baseUrl}/shows/${page}?${queryString.stringify(filter)}`,
      { proxy }
    );
    return result.data;
  },
  getDetails: async (
    id: string,
    proxy: AxiosProxyConfig | false = false
  ): Promise<SerieDetails> => {
    const result = await axios.get(`${baseUrl}/show/${id}`, { proxy });
    return result.data;
  },
  getRandom: async (
    proxy: AxiosProxyConfig | false = false
  ): Promise<Serie> => {
    const result = await axios.get(`${baseUrl}/random/show`, { proxy });
    return result.data;
  }
};

export default shows;
