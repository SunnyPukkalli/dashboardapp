import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 
  credentails = {
    username :'',
    password : ''
  }

  constructor(private loginService : LoginService) { }

  ngOnInit() {
  }

  onSubmit(){
    

    if( (this.credentails.username != null && this.credentails.password != null ) && ( this.credentails.username != '' && this.credentails.password != '' )) {
        
      //generate login token
      this.loginService.generateToken(this.credentails)
      .subscribe(
        (response:any) =>  {
            this.loginService.logInUser(response.token);
            window.location.href="/dashboard";
        },
        error => {
          alert('Unable to login, Please check with Administrator');
          window.location.href="/";
        }
      );

    } else {
        alert( 'Username and Password are Required!' );
    }
  }
}
