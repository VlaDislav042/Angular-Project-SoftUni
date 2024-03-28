import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-actors',
  templateUrl: './actors.component.html',
  styleUrls: ['./actors.component.css']
})
export class ActorsComponent {
  constructor(private router: Router) { }

  OnAddClicked() {
    this.router.navigate(['createMovie']);
  }
}
