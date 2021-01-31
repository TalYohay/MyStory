import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class LoginauthService implements CanActivate {

  constructor(public router: Router) { }

  canActivate(): boolean{

    const loggedIn = localStorage.getItem('id_token');
    if(loggedIn){
      return true;
    }else {
      this.router.navigate(["/"]);
      return false;
    }
    
  }
}

