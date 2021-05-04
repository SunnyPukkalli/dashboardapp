import { Component, OnInit, AfterViewInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog} from '@angular/material/dialog';
import { BuildInfoComponent } from '../build-info/build-info.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit  {

  // DUMMY DATA REPLACE WITH Service call here later
  data = [
    {
      "name": "JOB2",
      "displayName": "JOB2",
      "url": "http://localhost:8080/jenkins/job/JOB2/",
      "buildable": true,
      "color": "blue",
      "lastBuild": {
          "number": 7,
          "url": "http://localhost:8080/jenkins/job/JOB2/7/",
          "duration": 0,
          "building": false,
          "timestamp": 0
      }
  }
  ];

  // ACTUAL CODE
  buildMessage = 'Fetch lastest Build Details';

  displayedColumns: string[] = ['name', 'displayName', 'status', 'url' , 'lastBuild'];

  constructor(public dialog: MatDialog) {}

  
  dataSource = new MatTableDataSource(this.data);



  getStatus = (data : any ) : string => {
    return data.color == 'blue' ? 'SUCCESS' : 'FAILURE' ; 
  }

  openDialog(){
    const dialogRef = this.dialog.open(BuildInfoComponent);


  }



  ngOnInit() {
  }

}


