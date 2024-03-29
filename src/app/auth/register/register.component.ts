import {Component} from '@angular/core';
import {RegisterForm} from "../../types/Auth";
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private authService: AuthService) {
  }

  form: RegisterForm = {
    email: "",
    password: "",
    confirm_password: ""
  }


  submit() {
    this.authService.register(this.form)
  }

  isLoading() {
    return this.authService.isLoading
  }

}
