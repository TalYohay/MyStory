import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StoryService } from '../services/story.service';
import { map, filter} from 'rxjs/operators';
import { Story } from '../interfaces/Story';
import { User } from '../interfaces/User';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-stories',
  templateUrl: './user-stories.component.html',
  styleUrls: ['./user-stories.component.css']
})
export class UserStoriesComponent implements OnInit {

  constructor(public storyService: StoryService, public actRoute: ActivatedRoute, public userService: UserService) { }

  userId: string;
  storiesByUserId: Story[];
  userName: string;
  user: User;
  story: Story
  userName2:String;

  ngOnInit() {

   this.userId = this.actRoute.snapshot.paramMap.get('id')
    // this.getUserById(this.userId)
    
    this.storyService.getAllStories()
    .pipe(
      map((stories:Story[]) =>stories.filter(story => story.UserId == this.actRoute.snapshot.paramMap.get('id'))
      )
    ).subscribe((data: Story[]) =>{
      console.log("This user's stories are:", data)
      this.userName2 = data['userName']
      this.storiesByUserId = data
      console.log(" this.storiesByUserId:", this.storiesByUserId)
      
      // this.userName = this.story.userName
      // console.log("this user name:",this.userName);
    })
  }

  // getUserById(userId){
  //   this.userService.getUserById(userId).subscribe(data =>{
  //     this.user = data
  //     this.userName = this.user.firstName + '' + this.user.lastName
  //     console.log('Stories by:', this.userName)
  //   })
  // }

  

  
}
