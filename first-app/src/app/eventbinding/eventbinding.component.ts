import { Component, OnInit } from '@angular/core';

@Component({
  selector: '.app-eventbinding',
  template: `
    <button (click)="greet($event)">Greet</button>
    <button (click)="greeting='inline greeting'">Greet inline</button>
    {{greeting}}
  `,
  styleUrls: ['./eventbinding.component.scss']
})
export class EventbindingComponent implements OnInit {
  public greeting;
  
  constructor() { }

  ngOnInit() {
  }

  greet(event){
    console.log(event);
    this.greeting="Hello Event"
  }
}
