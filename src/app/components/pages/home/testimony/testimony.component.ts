import { Component, OnInit } from '@angular/core';
import {TestimonyService} from '../../../../services/testimony.service';
import {Testimony} from '../../../../models/testimony.model';

@Component({
  selector: 'app-testimony',
  templateUrl: './testimony.component.html',
  styleUrls: ['./testimony.component.css']
})
export class TestimonyComponent implements OnInit {

  constructor(private testimonyService: TestimonyService) { }

  ngOnInit(): void {
  }

  public testimonies(): Array<Testimony> {
    return this.testimonyService.testimonies;
  }

}
