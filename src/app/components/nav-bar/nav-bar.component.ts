import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  public loggedIn = false;
  public username : string;

  constructor( private loginService : LoginService ) { }

  ngOnInit() {
    this.loggedIn = this.loginService.isLoggedIn();
    if(this.loggedIn){
      
      this.loginService.getUsername(localStorage.getItem("userToken")).subscribe(
        (response) => {
          console.log(response);
          this.username = response;
        },
        error => {
          console.log(error);
        }
      );
    }
  }

  logoutUser(){
    this.loginService.logout();
    location.reload();
  }

}
