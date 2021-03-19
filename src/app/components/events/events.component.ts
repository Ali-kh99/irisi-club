import { Component, OnInit } from '@angular/core';

// import Swiper core and required modules
import SwiperCore, {Autoplay, SwiperOptions} from 'swiper/core';

// install Swiper modules
SwiperCore.use([Autoplay]);

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
