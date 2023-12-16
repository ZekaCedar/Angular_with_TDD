import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient : HttpClient) { }

  signUp(){
    this.httpClient.post("/api/1.0/users", {
      username: this.username,
      email: this.email,
      password: this.password
    }).subscribe(() => {});
  }

}
