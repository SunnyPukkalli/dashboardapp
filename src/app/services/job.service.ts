import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JobApi } from '../model/jobapi';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  constructor(private httpClient : HttpClient) { }

  serverURL = 'http://localhost:8081';

  getJobsByCategory(category:string) : Observable<JobApi>{
    return this.httpClient.get<JobApi>(`${this.serverURL}/rest/getJobsByCategory?category=${category}`);
  }

  
  getJobDetails(token:string ,type:string, url:string){

    return this.httpClient.get(`${this.serverURL}/rest/getStatus?loginToken=${token}&type=${type}&url=${url}`);

  }
}
