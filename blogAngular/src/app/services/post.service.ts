import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class PostService {
  url = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private http:HttpClient) { }
  posts(){
    return this.http.get(this.url);
  }
    /**

   * Write code on Method

   *

   * @return response()

   */

     find(id:number){ 
      return this.http.get(this.url + '/' + id) 
    }
}
