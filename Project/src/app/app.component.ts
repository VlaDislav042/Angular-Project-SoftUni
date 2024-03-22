import { Component } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { AuthComponent } from './tools/auth/auth.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Project';
  constructor(private loginSheet: MatBottomSheet) {

  }
  OnLoginClick() {
    this.loginSheet.open(AuthComponent);
  }
}
