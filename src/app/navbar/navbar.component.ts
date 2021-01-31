import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { User } from '../interfaces/User';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  user: User
  firstName: String
  constructor(public userService: UserService, public router: Router) { }

  ngOnInit() {

    this.userService.getProfile().subscribe(data =>{
      this.user = data['user'],
      this.firstName = this.user.firstName
      console.log("this user name:",this.user.firstName);
      // error => this.user = 'Profile'
    })
    
  }

  
  onLogoutClick(){
    this.userService.logout();
    console.log("You are logged out");
    this.router.navigate(['/']);
    return false;
  }

  loggedIn(){
    return localStorage.getItem('id_token');
  }
}
