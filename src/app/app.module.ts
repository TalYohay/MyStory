import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UserService } from './services/user.service';

import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginauthService } from './services/loginauth.service';
import { HomepageauthService } from './services/homepageauth.service';
import { StoriesComponent } from './stories/stories.component';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { CarouselModule, WavesModule,InputsModule, IconsModule } from 'angular-bootstrap-md'
import { ButtonsModule, CardsModule } from 'angular-bootstrap-md';
import { StoryPageComponent } from './story-page/story-page.component';
import { UserStoriesComponent } from './user-stories/user-stories.component';
import { ProfileStoriesComponent } from './profile/profile-stories/profile-stories.component';
import { AddStoryComponent } from './add-story/add-story.component';
import { EditStoryComponent } from './edit-story/edit-story.component'
import { CKEditorModule } from 'ng2-ckeditor';
import { TruncateModule } from 'ng2-truncate';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    NavbarComponent,
    RegisterComponent,
    ProfileComponent,
    StoriesComponent,
    StoryPageComponent,
    UserStoriesComponent,
    ProfileStoriesComponent,
    AddStoryComponent,
    EditStoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MDBBootstrapModule.forRoot(),
    CarouselModule, 
    WavesModule,
    InputsModule, 
    IconsModule,
    ButtonsModule,
    CardsModule,
    CKEditorModule,
    TruncateModule

  ],
  providers: [UserService, LoginauthService, HomepageauthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
