import { Component, Input } from '@angular/core';
import { FirebaseTSFirestore } from 'firebasets/firebasetsFirestore/firebaseTSFirestore';
import { FirebaseTSApp } from 'firebasets/firebasetsApp/firebaseTSApp';
import { FirebaseTSStorage } from 'firebasets/firebasetsStorage/firebaseTSStorage';
import { FirebaseTSAuth } from 'firebasets/firebasetsAuth/firebaseTSAuth';
import { ActorData } from 'src/app/pages/actors/actors.component';
import { ActorComponent } from '../actor/actor.component';
import { AppComponent } from 'src/app/app.component';
@Component({
  selector: 'app-actor-detail',
  templateUrl: './actor-detail.component.html',
  styleUrls: ['./actor-detail.component.css']
})
export class ActorDetailComponent {
  auth = new FirebaseTSAuth();
  firestore = new FirebaseTSFirestore();
  storage = new FirebaseTSStorage();


  dataRef: ActorData | undefined;
  constructor() {
    this.firestore.getDocument({

      path: ["Actor", "XfxO4XCMciMyVhH2tPeL"],
      onComplete: (result) => {
        this.dataRef = <ActorData>result.data();

        alert(ActorComponent.getActorData()?.actorId);
      },
      onFail: (err) => {
        alert("FAILED")
      }
    })
  }
}
