import { Component } from '@angular/core';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent {
  selectedImageFile: File | undefined;

  onPhotoSelected(photoSelector: HTMLInputElement) {
    this.selectedImageFile = photoSelector.files![0];
    if (!this.selectedImageFile) return;
    let fileReader = new FileReader();
    fileReader.readAsDataURL(this.selectedImageFile);
    fileReader.addEventListener(
      "loaded",
      ev => {
        let readableString = fileReader.result?.toString();
        if (!readableString) return;
        let postPreviewImage = <HTMLImageElement>document.getElementById('post-preview-image');
        postPreviewImage.src = readableString;
      }
    )
  }
}

