import { Component, Input, OnInit } from '@angular/core';
import { MovieData } from 'src/app/pages/movies/movies.component';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent {

  @Input() movieData!: MovieData;
}
