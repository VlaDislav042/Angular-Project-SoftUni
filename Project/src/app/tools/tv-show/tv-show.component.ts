import { Component, Input } from '@angular/core';
import { ShowData } from 'src/app/pages/tv-shows/tv-shows.component';

@Component({
  selector: 'app-tv-show',
  templateUrl: './tv-show.component.html',
  styleUrls: ['./tv-show.component.css']
})
export class TvShowComponent {
  @Input() showData!: ShowData;

}
