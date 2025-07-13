import {ApiData} from './api-data';

export type AggregateData = [
  { aantal_spellen: number },
  { aantal_spelers: number },
  apiStats: ApiData[]
];
