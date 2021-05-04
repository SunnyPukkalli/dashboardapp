import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JobInfo } from '../model/JobInfo';
import { BuildInfo } from '../model/BuildInfo';
import { Job } from '../model/Job';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  constructor(private httpClient : HttpClient) { }

  access_server_url = 'http://localhost:8081/rest/job';

  

  fetchAllJobs(){
    return this.httpClient.get<Job[]>(`${this.access_server_url}`);
  }

  getJobStatus(token:string , url : string){
      return this.httpClient.get<JobInfo>(`${this.access_server_url}/status?token=${token}&url=${url}&type=JOB`);
  }

  getJBuildStatus(token:string , url : string){
      return this.httpClient.get<BuildInfo>(`${this.access_server_url}/status?token=${token}&url=${url}&type=BUILD`);
    
  }


}
