import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import {Router} from '@angular/router';
import { Story } from '../interfaces/Story';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  id: any;
  user: any
  username = '';

  myStories: Story[]

  constructor(public userService: UserService, public router: Router) { }

  ngOnInit() {

      this.userService.getProfile().subscribe(data =>{
      console.log("profile data is:", data)
      this.user = data['user']
      error => this.router.navigate(['/'])
    })


  }

}
