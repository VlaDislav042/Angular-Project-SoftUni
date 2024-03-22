import { Component } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
  state = AuthState.LOGIN;



  OnForgetPasswordClick() {
    this.state = AuthState.FORGOT_PASSWORD;
  }
  OnCreateAccClick() {
    this.state = AuthState.REGISTER;

  }
  OnLoginClick() {
    this.state = AuthState.LOGIN;

  }

  isLoginState() {
    return this.state == AuthState.LOGIN;
  }

  isRegisterState() {
    return this.state == AuthState.REGISTER;
  }

  isForgotPassState() {
    return this.state == AuthState.FORGOT_PASSWORD;
  }

  getStateText() {
    switch (this.state) {
      case AuthState.LOGIN:
        return "Login";
      case AuthState.REGISTER:
        return "Register";
      case AuthState.FORGOT_PASSWORD:
        return "Forgot Password";
    }
  }
}

export enum AuthState {
  LOGIN,
  REGISTER,
  FORGOT_PASSWORD
}