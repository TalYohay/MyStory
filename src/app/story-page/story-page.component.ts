import { Component, OnInit } from '@angular/core';
import { Story } from '../interfaces/Story';
import { StoryService } from '../services/story.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import * as moment from 'moment'


@Component({
  selector: 'app-story-page',
  templateUrl: './story-page.component.html',
  styleUrls: ['./story-page.component.css']
})
export class StoryPageComponent implements OnInit {

  storyData: Story;
  storyId: any;

  constructor(public storyService: StoryService, public actRoute: ActivatedRoute) { }

  ngOnInit() {
    this.storyId = this.actRoute.snapshot.params['id'];
    console.log("Story ID is:", this.storyId);
    this.loadStoryDetails(this.storyId);  
  }

  loadStoryDetails(storyId){
    this.storyService.getStoryById(storyId).subscribe((data:Story) =>{
      this.storyData=data;
      console.log("Story data is:", this.storyData);
      return this.storyData;
    });
  };

}
