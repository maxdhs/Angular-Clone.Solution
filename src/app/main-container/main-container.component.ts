import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.css']
})
export class MainContainerComponent implements OnInit {

  name: string;
  names: string[] = ["max", "john", "derek"];

  constructor() { }

  ngOnInit() {
  }

  eventFromOuter(event) {
    this.name = event;
  }

}
