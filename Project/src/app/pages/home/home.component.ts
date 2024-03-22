import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { AuthComponent } from 'src/app/tools/auth/auth.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private loginSheet: MatBottomSheet) { }

  onGetStartedClicked() {
    this.loginSheet.open(AuthComponent);
  }
}
