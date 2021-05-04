import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  // login the user using token
  logInUser( token: string ){
    localStorage.setItem("userToken",token);
    return true;
  }

  // logout user
  logout(){
    localStorage.removeItem("userToken");

  }

  // Check if user is logged in
  isLoggedIn(){
    let token = localStorage.getItem("userToken");
    if( token == undefined || token ==='' || token == null){
      return false;
    } else {
      return true;
    }
  }

  constructor(private httpClient : HttpClient) { }

  access_server_url = 'http://localhost:8081';
  jenkins_user_url = 'http://localhost:8080/jenkins/user/';

  // get token from backend
  generateToken(credentails:any){
    return this.httpClient.post(`${this.access_server_url}/rest/login`,credentails);
  }


  //getLoggedIn Username
  getUsername(token : string){
    return this.httpClient.get(`${this.access_server_url}/rest/getUsername?token=${token}&url=${this.jenkins_user_url}`) ;
  }
}
