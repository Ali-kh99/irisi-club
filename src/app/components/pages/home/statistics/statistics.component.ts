import {Component, OnInit} from '@angular/core';
import {animate, group, query, stagger, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css'],
})
export class StatisticsComponent implements OnInit {
  showMoon0 = false;
  showMoon1 = false;
  showMoon2 = false;
  showMoon3 = false;
  showMoon4 = false;
  showMoon5 = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  toggleShowMoon(index: number): void {
    switch (index) {
      case 0:
        this.showMoon0 = !this.showMoon0;
        break;
      case 1:
        this.showMoon1 = !this.showMoon1;
        break;
      case 2:
        this.showMoon2 = !this.showMoon2;
        break;
      case 3:
        this.showMoon3 = !this.showMoon3;
        break;
      case 4:
        this.showMoon4 = !this.showMoon4;
        break;
      case 5:
        this.showMoon5 = !this.showMoon5;
        break;
    }
  }
}
