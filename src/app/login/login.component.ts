import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  model = { username: '', password: "" }
  errorMsg = ''

  constructor(private auth: AuthService, private router: Router) { }


  login() {
    if (this.model.username.trim().length === 0)
      this.errorMsg = "UserName required"
    else if (this.model.password.trim().length === 0)
      this.errorMsg = "password is required"
    else {

      this.errorMsg = ''
      const isLoggedIn = this.auth.login(this.model.username, this.model.password);
      if (isLoggedIn === 200) {
        this.router.navigate(["home"])
      }
      else{
      this.errorMsg = 'login details are not correct'
    }
    }
  }


}
