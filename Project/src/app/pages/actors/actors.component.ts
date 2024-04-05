import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseTSFirestore, Limit, OrderBy } from 'firebasets/firebasetsFirestore/firebaseTSFirestore';

@Component({
  selector: 'app-actors',
  templateUrl: './actors.component.html',
  styleUrls: ['./actors.component.css']
})
export class ActorsComponent {
  constructor(private router: Router) { }

  firestore = new FirebaseTSFirestore();
  actors: ActorData[] = [];

  ngOnInit(): void {
    this.getActors();
  }
  OnAddClicked() {
    this.router.navigate(['createActor']);
  }

  getActors() {
    this.firestore.getCollection({
      path: ["Actor"],
      where: [
        new OrderBy("timestamp", "desc"),
      ],
      onComplete: (result) => {
        result.docs.forEach(
          doc => {
            let actor = <ActorData>doc.data();
            this.actors.push(actor);
          }
        );

      },
      onFail: (err) => {
        alert(err)
      }
    })
  }
}

export interface ActorData {
  actorId: string,
  age: string,
  creatorId: string,
  description: string,
  imageUrl: string,
  movies: string,
  name: string,
}
