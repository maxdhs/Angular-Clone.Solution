import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-outer',
  templateUrl: './outer.component.html',
  styleUrls: ['./outer.component.css']
})
export class OuterComponent implements OnInit {

@Input() names: string[];
@Output() eventFromOuter = new EventEmitter();

name: string;

  constructor() { }

  ngOnInit() {
  }

  eventFromInner(event) {
    this.name = event;
    this.eventFromOuter.emit(this.name);
  }

}
