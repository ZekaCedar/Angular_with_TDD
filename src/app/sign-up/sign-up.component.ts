import { Component, OnInit } from '@angular/core';
import { UserService } from '../core/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  //property binding w html
  //disabled = true;
  username = '';
  email = '';
  password = '';
  passwordRepeat = '';
  apiProgress = false;
  signUpSuccess = false;

  constructor(private userService: UserService) {}

  ngOnInit(): void {}

  //event binding w HTML
  onChangeUsername(event: Event) {
    this.username = (event.target as HTMLInputElement).value;
    //this.disabled = this.password !== this.passwordRepeat;
  }

  onChangeEmail(event: Event) {
    this.email = (event.target as HTMLInputElement).value;
    //this.disabled = this.password !== this.passwordRepeat;
  }

  onChangePassword(event: Event) {
    this.password = (event.target as HTMLInputElement).value;
    //this.disabled = this.password !== this.passwordRepeat;
  }

  onChangePasswordRepeat(event: Event) {
    this.passwordRepeat = (event.target as HTMLInputElement).value;
    //this.disabled = this.password !== this.passwordRepeat;
  }

  onClickSignup() {
    this.apiProgress = true;

    this.userService
      .signUp({
        username: this.username,
        email: this.email,
        password: this.password,
      })
      .subscribe(() => {
        this.signUpSuccess = true;
      });

    //console.log('clicked');
    // fetch("/api/1.0/users", {
    //   method:'POST',
    //   body:JSON.stringify({username:this.username, password:this.password, email:this.email}),
    //   headers:{
    //     "Content-Type":"application/json"
    //   }
    // })

    // this.httpClient.post("/api/1.0/users", {
    //   username: this.username,
    //   email: this.email,
    //   password: this.password
    // }).subscribe(() => {
    //   this.signUpSuccess = true;
    // });
  }

  isDisabled() {
    return this.password ? this.password !== this.passwordRepeat : true;
  }
}
