import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FirebaseTSApp } from 'firebasets/firebasetsApp/firebaseTSApp'
import { environment } from 'src/environments/environment';
import { HomeComponent } from './pages/home/home.component';

import { MatButtonModule } from '@angular/material/button';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatCardModule } from '@angular/material/card';
import { AuthComponent } from './tools/auth/auth.component';
import { EmailVerificationComponent } from './pages/email-verification/email-verification.component';
import { ProfileComponent } from './tools/profile/profile.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { PostfeedComponent } from './pages/postfeed/postfeed.component';
import { CreatePostComponent } from './tools/create-post/create-post.component';
import { PostComponent } from './tools/post/post.component';
import { ReplyComponent } from './tools/reply/reply.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { TvShowsComponent } from './pages/tv-shows/tv-shows.component';
import { ActorsComponent } from './pages/actors/actors.component';
import { MyProfileComponent } from './pages/my-profile/my-profile.component';
import { CreateMovieComponent } from './tools/create-movie/create-movie.component';
import { ActorComponent } from './tools/actor/actor.component';
import { TvShowComponent } from './tools/tv-show/tv-show.component';
import { MovieComponent } from './tools/movie/movie.component';
import { CreateActorComponent } from './tools/create-actor/create-actor.component';
import { CreateTvShowComponent } from './tools/create-tv-show/create-tv-show.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AuthComponent,
    EmailVerificationComponent,
    ProfileComponent,
    PostfeedComponent,
    CreatePostComponent,
    PostComponent,
    ReplyComponent,
    MoviesComponent,
    TvShowsComponent,
    ActorsComponent,
    MyProfileComponent,
    CreateMovieComponent,
    ActorComponent,
    TvShowComponent,
    CreateActorComponent,
    CreateTvShowComponent,
    MovieComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatBottomSheetModule,
    MatCardModule,
    MatDialogModule,
    MatIconModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor() {
    FirebaseTSApp.init(environment.firebaseConfig);
  }
}
