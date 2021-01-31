import { HttpClient, HttpHeaders } from '@angular/common/http';
// import Story from '../interfaces/Story';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class StoryService {

  constructor(public http: HttpClient) { }

   // uri = 'http://localhost:5000';
  //  uri = 'https://cors-anywhere.herokuapp.com/https://mystoryheroku.herokuapp.com'
  // uri = 'http://localhost:5000/api'
  uri = 'https://mystoryy.herokuapp.com/api' 
  getAllStories(){
    // const token = localStorage.getItem('id_token');
    // let headers = new HttpHeaders({
    //   'Content-Type': 'application/json',
    //   'auth-token': token
    // });
    
    // const httpOptions = {
    //   headers: headers
    
    // };
    return this.http.get(`${this.uri}/stories`)
    // ,httpOptions
  }

  getStoryById(id){
    // const token = localStorage.getItem('id_token');
    // let headers = new HttpHeaders({
    //   'Content-Type': 'application/json',
    //   'auth-token': token
    // });
    
    // const httpOptions = {
    //   headers: headers
    // };
    return this.http.get(`${this.uri}/stories/story/${id}`)
  }
  // ,httpOptions

  deleteStory(id){
    const token = localStorage.getItem('id_token');
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'auth-token': token
    });
    
    const httpOptions = {
      headers: headers
    };
    return this.http.delete(`${this.uri}/stories/story/${id}`,httpOptions)
  }

  createStory(body){
    const token = localStorage.getItem('id_token');
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'auth-token': token
    });
    
    const httpOptions = {
      headers: headers
    };
    return this.http.post(`${this.uri}/stories/add`,body,httpOptions);
  }

  updateStory(id, data){
    const token = localStorage.getItem('id_token');
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'auth-token': token
    });
    
    const httpOptions = {
      headers: headers
    };
    
    return this.http.put(`${this.uri}/stories/edit/${id}`, data, httpOptions)
  }
}

