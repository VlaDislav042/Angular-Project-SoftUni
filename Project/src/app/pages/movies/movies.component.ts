import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent {

  constructor(private router: Router) { }

  OnAddClicked() {
    this.router.navigate(['createMovie']);
  }
}
