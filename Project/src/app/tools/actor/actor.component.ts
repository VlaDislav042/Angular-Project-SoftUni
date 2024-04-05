import { Component, Input } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-actor',
  templateUrl: './actor.component.html',
  styleUrls: ['./actor.component.css']
})
export class ActorComponent {
  @Input() actorData!: ActorData;
  private static actorData: ActorData | null;
  constructor(private router: Router) { }

  onInfoClick() {
    this.router.navigate(["actorDetail"]);
  }

  public static getActorData() {
    return ActorComponent.actorData;
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
