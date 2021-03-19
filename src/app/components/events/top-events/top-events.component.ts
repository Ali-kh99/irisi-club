import { Component, OnInit } from '@angular/core';
import { Evenement } from 'src/app/models/evenement.model';
import { EvenementService } from 'src/app/services/evenement.service';

@Component({
  selector: 'app-top-events',
  templateUrl: './top-events.component.html',
  styleUrls: ['./top-events.component.css']
})
export class TopEventsComponent implements OnInit {

  constructor(private evenementService: EvenementService) { }

  ngOnInit(): void {
  }

  public evenements(): Array<Evenement> {
    return this.evenementService.getTop3Events();
  }

}
