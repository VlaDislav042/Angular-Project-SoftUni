import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseTSFirestore, Limit, OrderBy } from 'firebasets/firebasetsFirestore/firebaseTSFirestore';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent {
  firestore = new FirebaseTSFirestore();
  movies: MovieData[] = [];

  ngOnInit(): void {
    this.getMovies();
  }

  constructor(private router: Router) { }

  OnAddClicked() {
    this.router.navigate(['createMovie'])
  }

  getMovies() {
    this.firestore.getCollection({
      path: ["Movie"],
      where: [
        new OrderBy("timestamp", "desc"),
        new Limit(10)
      ],
      onComplete: (result) => {
        result.docs.forEach(
          doc => {
            let movie = <MovieData>doc.data();
            movie.movieId = doc.id;
            this.movies.push(movie);
          }
        );
      },
      onFail: (err) => {

      }
    })
  }
}

export interface MovieData {
  title: string,
  genre: string,
  director: string,
  year: string,
  description: string,
  imageUrl?: string,
  creatorId: string,
  movieId: string

}
