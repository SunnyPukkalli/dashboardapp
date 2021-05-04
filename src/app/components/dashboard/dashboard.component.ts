import { Component, OnInit, AfterViewInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { BuildInfoComponent } from '../build-info/build-info.component';
import { JobService } from 'src/app/services/job.service';
import { Job } from 'src/app/model/Job';
import { JobInfo } from 'src/app/model/JobInfo';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(public dialog: MatDialog, private jobService: JobService) { }

  jobList$ = this.jobService.fetchAllJobs();
  jobList: Job[];


  jobInfo: JobInfo[]  = [];

  isLoadingResults = true;
  isRateLimitReached = false;

  dataSource  : any;

  ngOnInit() {

    this.jobService.fetchAllJobs().subscribe(
      (response: Job[]) => {
        
        this.jobList = response;

        for (let job of this.jobList) {
          this.jobService.getJobStatus(localStorage.getItem("userToken"), job.url).subscribe(
            (response: any) => {
              this.isLoadingResults = false;
              this.isRateLimitReached = false;  
              this.jobInfo.push(response);
            }
            , error => {
              console.log(error);
            }
          );
        }
        this.setDataSource(this.jobInfo);

      },
      error => {
        this.isLoadingResults = false;
        this.isRateLimitReached = true;
      }
    );


  }

  setDataSource(jobInfo : JobInfo[]){
    this.dataSource = jobInfo;
  }


  // ACTUAL CODE
  buildMessage = 'Fetch lastest Build Details';

  displayedColumns: string[] = ['name', 'displayName', 'status', 'url', 'lastBuild'];

  

  getStatus = (data: any): string => {
    return data.color == 'blue' ? 'SUCCESS' : 'FAILURE';
  }

  openDialog(jobName: string) {
    const dialogRef = this.dialog.open(BuildInfoComponent, {
      data: jobName
    });


  }

}
