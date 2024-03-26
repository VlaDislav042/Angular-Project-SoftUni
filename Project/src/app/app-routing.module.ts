import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { EmailVerificationComponent } from './pages/email-verification/email-verification.component';
import { PostfeedComponent } from './pages/postfeed/postfeed.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { TvShowsComponent } from './pages/tv-shows/tv-shows.component';
import { ActorsComponent } from './pages/actors/actors.component';
import { MyProfileComponent } from './pages/my-profile/my-profile.component';
import { AuthActivate } from './tools/guards/auth.activate';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "emailVerification", component: EmailVerificationComponent },
  { path: "postfeed", component: PostfeedComponent, },
  { path: "movies", component: MoviesComponent },
  { path: "tvShows", component: TvShowsComponent },
  { path: "actors", component: ActorsComponent },
  { path: "profile", component: MyProfileComponent },
  { path: "**", component: HomeComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
