import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import { User } from '../interfaces/User';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user:User;
  authToken: any;

 
  uri = 'https://mystoryy.herokuapp.com/api' 
  // uri = 'http://localhost:5000/api'

  constructor( public http: HttpClient, public router: Router ) { }

  public Signup(body) {
    return this.http.post(`${this.uri}/register`, body,{
      observe:'body'
    }); 
  }
  
  public Login(user){ 
    return this.http.post(`${this.uri}/login`,user) 
  }

  storeUserData(token, user){
    localStorage.setItem('id_token',token);
    localStorage.setItem('user',JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }


  getProfile(){

    const token = localStorage.getItem('id_token');
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'auth-token': token
    });
    
    const httpOptions = {
      headers: headers
    };
    return this.http.get(`${this.uri}/profile`, httpOptions)
  
    };

    getUserById(id){
      
        const token = localStorage.getItem('id_token');
        let headers = new HttpHeaders({
          'Content-Type': 'application/json',
          'auth-token': token
        });
        
        const httpOptions = {
          headers: headers
        };
        return this.http.get(`${this.uri}/user/${id}`,httpOptions)
        .pipe(map(res => res['user']))
      }
      
    

    getProfileStories(){
      const token = localStorage.getItem('id_token');
      let headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'auth-token': token
      });
      
      const httpOptions = {
        headers: headers
      };
      return this.http.get(`${this.uri}/profile/mystories`, httpOptions)  
     
      };
    

    
    loggedIn(){
      return localStorage.getItem('id_token');
    }
  
    loggedOut(){
     return localStorage.getItem('id_token') == null
    }

    
  logout(){
    this.authToken = null;
    this.user = null;
    localStorage.removeItem('id_token')
    localStorage.removeItem('user')
  }

}
