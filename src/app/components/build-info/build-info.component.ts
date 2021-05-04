import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-build-info',
  templateUrl: './build-info.component.html',
  styleUrls: ['./build-info.component.css']
})
export class BuildInfoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  data = [
    {
      "id": "6",
      "displayName": "#6",
      "number": 6,
      "url": "http://localhost:8080/jenkins/job/JOB2/6/",
      "duration": 733,
      "building": false,
      "result": "FAILURE",
      "timestamp": 1620132565494,
      "culprits": [],
      "actions": [
          {
              "causes": [
                  {
                      "userId": "admin",
                      "userName": "admin"
                  }
              ]
          }
      ]
  }
  ];


  displayedColumns: string[] = ['id', 'displayName', 'number', 'url' , 'result','timestamp','duration','actions'];

  dataSource = new MatTableDataSource(this.data);

  
}
