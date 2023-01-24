import {Component} from '@angular/core';
import {LoginForm} from "../../types/Auth";
import {getAuth, signInWithEmailAndPassword} from "firebase/auth";
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private authService: AuthService) {
  }

  form: LoginForm = {
    email: '',
    password: ''
  }



  submit() {
    this.authService.login(this.form);
  }

  isLoading() {
    return this.authService.isLoading
  }

}
