import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseTSApp } from 'firebasets/firebasetsApp/firebaseTSApp';
import { FirebaseTSAuth } from 'firebasets/firebasetsAuth/firebaseTSAuth';
import { FirebaseTSFirestore } from 'firebasets/firebasetsFirestore/firebaseTSFirestore';
import { FirebaseTSStorage } from 'firebasets/firebasetsStorage/firebaseTSStorage';

@Component({
  selector: 'app-create-tv-show',
  templateUrl: './create-tv-show.component.html',
  styleUrls: ['./create-tv-show.component.css']
})
export class CreateTvShowComponent {
  selectedImageFile: File | any = null;
  auth = new FirebaseTSAuth();
  firestore = new FirebaseTSFirestore();
  storage = new FirebaseTSStorage();

  constructor(private router: Router) { }

  onCreateClick(
    titleInput: HTMLInputElement,
    genreInput: HTMLInputElement,
    directorInput: HTMLInputElement,
    yearInput: HTMLInputElement,
    descriptionInput: HTMLInputElement,
    imageUrl: HTMLInputElement,

  ) {
    let title = titleInput.value;
    let genre = genreInput.value;
    let director = directorInput.value;
    let year = yearInput.value;
    let description = descriptionInput.value;
    this.selectedImageFile = imageUrl.files?.[0] || null;

    if (title.length <= 0 || genre.length <= 0 || director.length <= 0 || year.length <= 0 || description.length <= 0 || !this.selectedImageFile) return alert("All fields are required");

    let showId = this.firestore.genDocId();
    this.storage.upload({
      uploadName: "upload Image TvShow",
      path: ["TvShow", showId, "image"],
      data: {
        data: this.selectedImageFile
      },
      onComplete: (downloadUrl) => {
        this.firestore.create(
          {
            path: ["TvShow", showId],
            data: {
              title: title,
              genre: genre,
              director: director,
              year: year,
              description: description,
              imageUrl: downloadUrl,
              timestamp: FirebaseTSApp.getFirestoreTimestamp(),
              creatorId: this.auth.getAuth().currentUser?.uid,
            },
            onComplete: (docId) => {
              this.router.navigate(["tvShows"])
            }
          }
        )
      }
    })
  }
}
