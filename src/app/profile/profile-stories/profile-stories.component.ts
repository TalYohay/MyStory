import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Story } from 'src/app/interfaces/Story';
import { StoryService } from 'src/app/services/story.service'


@Component({
  selector: 'app-profile-stories',
  templateUrl: './profile-stories.component.html',
  styleUrls: ['./profile-stories.component.css']
})
export class ProfileStoriesComponent implements OnInit {

  myStories: Story[]

  constructor(public userService: UserService, public storyService: StoryService) { }

  ngOnInit() {

    this.userService.getProfileStories().subscribe((story:Story[]) => {
      this.myStories = story;
      console.log("My Stories:", this.myStories)
    })

  }

  deleteStory(story, index){
    this.storyService.deleteStory(story._id).subscribe((data:Story) =>{
      this.myStories.splice(index, 1) 
    })
  }

}
