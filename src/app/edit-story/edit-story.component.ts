import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { StoryService } from '../services/story.service'
import { Story } from '../interfaces/Story'
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-story',
  templateUrl: './edit-story.component.html',
  styleUrls: ['./edit-story.component.css']
})
export class EditStoryComponent implements OnInit {
  editStoryForm: FormGroup;
  disabledSubmitButton: boolean = true;

  constructor(public storyService: StoryService, public fb: FormBuilder, public router: Router, public actRoute: ActivatedRoute) { }

  ngOnInit() {
    this.updateStory();
    let id = this.actRoute.snapshot.paramMap.get('id');
    this.getStory(id);
    this.editStoryForm = this.fb.group({
      title: ['', Validators.required],
      body:  ['', Validators.required]

    })
  }


  getStory(id){
    this.storyService.getStoryById(id).subscribe(data =>{
      this.editStoryForm.setValue({
        title: data['title'],
        body: data['body']
      })
    })
  }

  updateStory(){
    this.editStoryForm = this.fb.group({
      title: ['', Validators.required],
      body:  ['', Validators.required]
    })
  }
  
  onSubmit(){
    let id = this.actRoute.snapshot.paramMap.get('id');
    this.storyService.updateStory(id, this.editStoryForm.value).subscribe(res => {
      this.router.navigate(['/profile/mystories'])
      console.log('Content updated successfully!')
    },
    (error) => {
      console.log(error)
    })
  }

}
