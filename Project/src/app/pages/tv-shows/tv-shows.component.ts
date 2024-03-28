import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tv-shows',
  templateUrl: './tv-shows.component.html',
  styleUrls: ['./tv-shows.component.css']
})
export class TvShowsComponent {
  constructor(private router: Router) { }

  OnAddClicked() {
    this.router.navigate(['createMovie']);
  }
}
