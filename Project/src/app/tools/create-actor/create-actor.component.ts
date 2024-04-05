import { Component, OnInit } from '@angular/core';
import { FirebaseTSFirestore, } from 'firebasets/firebasetsFirestore/firebaseTSFirestore';
import { FirebaseTSApp } from 'firebasets/firebasetsApp/firebaseTSApp';
import { FirebaseTSStorage } from 'firebasets/firebasetsStorage/firebaseTSStorage';
import { FirebaseTSAuth } from 'firebasets/firebasetsAuth/firebaseTSAuth';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create-actor',
  templateUrl: './create-actor.component.html',
  styleUrls: ['./create-actor.component.css']
})
export class CreateActorComponent {
  selectedImageFile: File | any = null;
  auth = new FirebaseTSAuth();
  firestore = new FirebaseTSFirestore();
  storage = new FirebaseTSStorage();

  constructor(private router: Router) { }


  onCreateClick(
    nameInput: HTMLInputElement,
    ageInput: HTMLInputElement,
    moviesInput: HTMLInputElement,
    descriptionInput: HTMLInputElement,
    imageUrl: HTMLInputElement,
  ) {
    let name = nameInput.value;
    let age = ageInput.value;
    let movies = moviesInput.value;
    let description = descriptionInput.value;
    this.selectedImageFile = imageUrl.files?.[0] || null;

    if (name.length <= 0 || age.length <= 0 || movies.length <= 0 || description.length <= 0 || !this.selectedImageFile) return alert("All fields are required");

    let actorId = this.firestore.genDocId();
    this.storage.upload({
      uploadName: "upload Image Movie",
      path: ["Actor", actorId, "image"],
      data: {
        data: this.selectedImageFile
      },
      onComplete: (downloadUrl) => {
        this.firestore.create(
          {
            path: ["Actor", actorId],
            data: {
              name: name,
              age: age,
              movies: movies,
              description: description,
              imageUrl: downloadUrl,
              timestamp: FirebaseTSApp.getFirestoreTimestamp(),
              creatorId: this.auth.getAuth().currentUser?.uid,
              actorId: actorId
            },
            onComplete: (docId) => {
              this.router.navigate(["actors"])
            }
          }
        )
      }
    })
  }
}
