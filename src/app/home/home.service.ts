import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HomeService {

  link: string = 'http://localhost:3000/'

  constructor(
   private http: HttpClient
 ){
 }

 getPosts(){
   return new Promise((resolve, reject) => {
     this.http.get(this.link + 'posts').subscribe(data => {
       // Read the result field from the JSON response.
       resolve(data);
     });
   });
  }
}
