import { Job } from './job';

export interface JobApi {
  items : Job[];
  total_count: number;
}