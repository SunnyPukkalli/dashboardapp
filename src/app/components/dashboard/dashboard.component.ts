import { Component, OnInit, AfterViewInit } from '@angular/core';
import { JobService } from '../../services/job.service';
import { Job } from '../../model/job';
import { JobApi} from '../../model/jobapi'
import {catchError, map, startWith, switchMap} from 'rxjs/operators';
import {merge, Observable, of as observableOf} from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements AfterViewInit {
  
  // DUMMY DATA FOR TEST PURPOSE 
  ELEMENT_DATA : Job[] = [
    { url:'http://localhost:8080/jenkins/job/JOB1',name:'JOB1',color:'BLUE',downstream:false,upstream:false,jobHealthBuildStability:'GOOD',jobHealthTestResult:'GOOD'},
    { url:'http://localhost:8080/jenkins/job/JOB2',name:'JOB2',color:'GREEN',downstream:false,upstream:false,jobHealthBuildStability:'GOOD',jobHealthTestResult:'GOOD'}
  ];
  dummy = this.ELEMENT_DATA;

  // ACUTAL CODE 

  displayedColumns: string[] = [ 'name', 'color', 'downstream','upstream','jobHealthBuildStability','jobHealthTestResult','url'];

  dataSource : Observable<Job[]>;
  resultsLength = 0;
  isLoadingResults = false;
  isRateLimitReached = false;

  constructor(private jobService : JobService ) { }


  ngAfterViewInit(){

    this.dataSource = merge()
      .pipe(
        startWith({}),
        switchMap( () => {
          this.isLoadingResults = true;
          return this.jobService.getJobsByCategory('1');
        }),
        map(data =>{
          // Flip flag to show that loading has finished.
          this.isLoadingResults = false;
          this.isRateLimitReached = false;
          this.resultsLength = data.total_count;

          return data.items;
        }),
        catchError( () => {
          this.isLoadingResults = false;
           
          // Catch if the backend API has reached its rate limit. Return empty data.
          this.isRateLimitReached = true;
          return observableOf([]);
        })
      );

  }
  
}

