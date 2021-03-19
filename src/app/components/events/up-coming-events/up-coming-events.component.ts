import { Component, OnInit } from '@angular/core';
import {EvenementService} from '../../../services/evenement.service';
import {Evenement} from '../../../models/evenement.model';
import {faAngleDoubleRight} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-up-coming-events',
  templateUrl: './up-coming-events.component.html',
  styleUrls: ['./up-coming-events.component.css']
})
export class UpComingEventsComponent implements OnInit {
  faAngleDoubleRight = faAngleDoubleRight;

  constructor(private evenementService: EvenementService) { }

  ngOnInit(): void {
  }

  public evenements(): Array<Evenement> {
    return this.evenementService.getUpComingEvents();
  }

  onSlideChange(): void {
    console.log('onSlideChange');
  }

  onSwiper($event): void {
    console.log('onSwiper');
  }

}
