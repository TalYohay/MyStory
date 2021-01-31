import { Component, OnInit } from '@angular/core';
import { StoryService } from '../services/story.service'; 
import { Story } from '../interfaces/Story';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.css']
})
export class StoriesComponent implements OnInit {

  stories:Story[] = []

  constructor(public StoryService: StoryService) { }

  ngOnInit() {
    this.StoryService.getAllStories().subscribe((data: Story[]) =>{
      this.stories = data;
      console.log(this.stories)
    })
  }

}


