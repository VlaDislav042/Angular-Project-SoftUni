import { Component, OnInit } from '@angular/core';
import { FirebaseTSFirestore, } from 'firebasets/firebasetsFirestore/firebaseTSFirestore';
import { FirebaseTSApp } from 'firebasets/firebasetsApp/firebaseTSApp';
import { FirebaseTSStorage } from 'firebasets/firebasetsStorage/firebaseTSStorage';
import { FirebaseTSAuth } from 'firebasets/firebasetsAuth/firebaseTSAuth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-movie',
  templateUrl: './create-movie.component.html',
  styleUrls: ['./create-movie.component.css']
})
export class CreateMovieComponent {
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

    if (title.length <= 0 || genre.length <= 0 || director.length <= 0 || year.length <= 0 || description.length <= 0) return alert("All fields are required");

    let movieId = this.firestore.genDocId();
    this.storage.upload({
      uploadName: "upload Image Movie",
      path: ["Movie", movieId, "image"],
      data: {
        data: this.selectedImageFile
      },
      onComplete: (downloadUrl) => {
        this.firestore.create(
          {
            path: ["Movie", movieId],
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
              this.router.navigate(["movies"])
            }
          }
        )
      }
    })
  }


}
