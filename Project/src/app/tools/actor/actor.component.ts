import { Component, Input } from '@angular/core';
import { ActorData } from 'src/app/pages/actors/actors.component';

@Component({
  selector: 'app-actor',
  templateUrl: './actor.component.html',
  styleUrls: ['./actor.component.css']
})
export class ActorComponent {
  @Input() actorData!: ActorData;
}
