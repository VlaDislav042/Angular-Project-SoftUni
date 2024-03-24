import { Component } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { AuthComponent } from './tools/auth/auth.component';
import { FirebaseTSAuth } from 'firebasets/firebasetsAuth/firebaseTSAuth';
import { Router } from '@angular/router';
import { FirebaseTSFirestore } from 'firebasets/firebasetsFirestore/firebaseTSFirestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Project';

  isLoggedIn = false;
  userHasProfile = true;
  userDocument: UserDocument | undefined;
  auth = new FirebaseTSAuth();
  firestore = new FirebaseTSFirestore();

  constructor(private loginSheet: MatBottomSheet, private router: Router) {
    this.auth.listenToSignInStateChanges(
      user => {
        this.auth.checkSignInState({
          whenSignedIn: user => {
          },
          whenSignedOut: user => {
          },
          whenSignedInAndEmailNotVerified: user => {
            router.navigate(["emailVerification"]);
          },
          whenSignedInAndEmailVerified: user => {
            this.getUserProfile();
          },
          whenChanged: user => {

          }
        })
      }
    );
  }

  getUserProfile() {
    this.firestore.listenToDocument({
      name: "Getting Document",
      path: ["Users", this.auth.getAuth().currentUser?.uid as string],
      onUpdate: (result) => {
        this.userDocument = <UserDocument>result.data();
        this.userHasProfile = result.exists;
        if (this.userHasProfile) {
          this.router.navigate(["postfeed"])
        }
      }
    });
  }

  onLogoutClick() {
    this.auth.signOut();
  }

  loggedIn() {
    return this.auth.isSignedIn();
  }

  OnLoginClick() {
    this.loginSheet.open(AuthComponent);
  }
}


export interface UserDocument {
  publicName: string,
  description: string
}