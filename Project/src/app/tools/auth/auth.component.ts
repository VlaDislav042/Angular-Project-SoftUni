import { Component, OnInit } from '@angular/core';
import { FirebaseTSAuth } from 'firebasets/firebasetsAuth/firebaseTSAuth';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
  state = AuthState.LOGIN;
  firebasetsAuth: FirebaseTSAuth;
  constructor() {
    this.firebasetsAuth = new FirebaseTSAuth();
  }

  OnRegisterClick(
    registerEmail: HTMLInputElement,
    registerPassword: HTMLInputElement,
    registerConfirmPassword: HTMLInputElement
  ) {
    let email = registerEmail.value;
    let password = registerPassword.value;
    let confirmPass = registerConfirmPassword.value;

    if (
      this.isNotEmpty(email) &&
      this.isNotEmpty(password) &&
      this.isNotEmpty(confirmPass) &&
      this.isMatch(password, confirmPass)
    ) {
      this.firebasetsAuth.createAccountWith(
        {
          email: email,
          password: password,
          onComplete: (uc) => {
            alert('Account created.');
            registerEmail.value = "";
            registerPassword.value = "";
            registerConfirmPassword.value = "";
          },
          onFail: (err) => {
            alert("Failed to create the account.");
          }
        }
      );
    }
  }
  OnLogin(
    loginEmail: HTMLInputElement,
    loginPassword: HTMLInputElement,
  ) {
    let email = loginEmail.value;
    let password = loginPassword.value;

    if (this.isNotEmpty(email) && this.isNotEmpty(password)) {
      this.firebasetsAuth.signInWith({
        email: email,
        password: password,
        onComplete: (uc) => {
          alert("Logged in.")
        },
        onFail: (err) => {
          alert(err);
        }
      });
    }
  }
  OnResetClick(resetEmail: HTMLInputElement) {
    let email = resetEmail.value;

    if (this.isNotEmpty(email)) {
      this.firebasetsAuth.sendPasswordResetEmail({
        email: email,
        onComplete: (uc) => {
          alert(`Resent email sent to ${email}`)
        }
      });
    }
  }

  isNotEmpty(text: string) {
    return text != null && text.length > 0;
  }
  isMatch(text: string, comparedWith: string) {
    return text == comparedWith;
  }

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