import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url = 'http://localhost:8081';

  constructor(private httpClient : HttpClient) { }

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

  // get token from backend
  generateToken(credentails:any){
    return this.httpClient.post(`${this.url}/rest/login`,credentails);
  }

  //getLoggedIn Username
  getUsername(token : string){
    return this.httpClient.get(`${this.url}/rest/getUsername?userToken=${token}`,{responseType:'text'} ) ;
  }
}
