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
            this.movies.push(movie);
          }
        );

      },
      onFail: (err) => {
        alert(err)
      }
    })
  }

}

export interface MovieData {
  creatorId: string,
  description: string,
  director: string,
  genre: string,
  imageUrl?: string,
  title: string,
  year: string

}
