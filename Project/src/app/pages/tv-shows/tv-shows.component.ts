import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseTSFirestore, OrderBy } from 'firebasets/firebasetsFirestore/firebaseTSFirestore';

@Component({
  selector: 'app-tv-shows',
  templateUrl: './tv-shows.component.html',
  styleUrls: ['./tv-shows.component.css']
})
export class TvShowsComponent {
  constructor(private router: Router) { }

  firestore = new FirebaseTSFirestore();
  shows: ShowData[] = [];

  ngOnInit(): void {
    this.getShows();
  }
  OnAddClicked() {
    this.router.navigate(['createTvShow']);
  }

  getShows() {
    this.firestore.getCollection({
      path: ["TvShow"],
      where: [
        new OrderBy("timestamp", "desc"),
      ],
      onComplete: (result) => {
        result.docs.forEach(
          doc => {
            let show = <ShowData>doc.data();
            this.shows.push(show);
          }
        );

      },
      onFail: (err) => {
        alert(err)
      }
    })
  }
}

export interface ShowData {
  creatorId: string,
  description: string,
  director: string,
  genre: string,
  imageUrl: string,
  title: string,
  year: string
}

