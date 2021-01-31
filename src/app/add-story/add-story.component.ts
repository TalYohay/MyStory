import { Component, OnInit, HostListener } from '@angular/core';
import { NgForm, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { StoryService } from '../services/story.service'
import { Story } from '../interfaces/Story'
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-story',
  templateUrl: './add-story.component.html',
  styleUrls: ['./add-story.component.css']
})
export class AddStoryComponent implements OnInit {

  story: Story;
  createStoryForm: FormGroup;
  disabledSubmitButton: boolean = true;

  constructor(public storyService: StoryService, public fb: FormBuilder, public router: Router) { }

  ngOnInit() {
    this.createStoryForm = this.fb.group({
      title: [null, Validators.required],
      body: [null, Validators.required],
    })
  }
  @HostListener('input') oninput() {

    if (this.createStoryForm.valid) {
      this.disabledSubmitButton = false;
      }
    }

    createStory(){
      this.storyService.createStory(this.createStoryForm.value).subscribe(res => {
        // this.showSuccessMessage = true;
            // setTimeout(()=> this.showSuccessMessage = false,4000);
            console.log("Story was saved!", this.createStoryForm.value)    
          this.createStoryForm.reset()
          this.createStoryForm.setValue({
            title : '',
            body: '',
          })   
          this.router.navigate(["/profile"])
          }
          
          // err =>{
          //     this.serverErrorMessages = true;
          //     setTimeout(()=> this.serverErrorMessages = false,4000);
          // });
      )}
    

}
