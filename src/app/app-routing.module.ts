import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginauthService } from './services/loginauth.service';
import { HomepageauthService } from './services/homepageauth.service';
import { StoriesComponent } from './stories/stories.component';
import { StoryPageComponent } from './story-page/story-page.component'
import { UserStoriesComponent } from './user-stories/user-stories.component'
import { ProfileStoriesComponent } from './profile/profile-stories/profile-stories.component'
import { AddStoryComponent } from './add-story/add-story.component'
import { EditStoryComponent } from './edit-story/edit-story.component'

const routes: Routes = [
  {path: '', component: StoriesComponent},
  {path: 'login', component: LoginComponent},
  {path: 'stories/story/:id', component: StoryPageComponent},
  {path: 'stories/user/:id', component: UserStoriesComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'profile', component: ProfileComponent, canActivate:[LoginauthService]},
  {path: 'profile/mystories', component: ProfileStoriesComponent, canActivate:[LoginauthService]},
  {path: 'stories/add', component: AddStoryComponent, canActivate:[LoginauthService]},
  {path: 'stories/edit/:id', component: EditStoryComponent, canActivate:[LoginauthService]},
  {path: 'dashboard', component: DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
