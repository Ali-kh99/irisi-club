import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-c-button',
  templateUrl: './c-button.component.html',
  styleUrls: ['./c-button.component.css']
})
export class CButtonComponent implements OnInit {
  @Input()
  route: string;
  @Input()
  message: string;

  constructor() { }

  ngOnInit(): void {
  }

}
