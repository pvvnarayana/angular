import { Component, OnInit } from '@angular/core';

@Component({
  selector: '.app-stylebinding',
  template: `
    <h2 [style.color]="hasError ? 'red' : 'green'">Style Binding 1</h2>
    <h2 [style.color]="highlightColor">Style Binding 2</h2>
    <h2 [ngStyle]="titleColors">Style Binding 3</h2>
  `,
  styles: [`
  
  `]
})
export class StylebindingComponent implements OnInit {

  public hasError=true;
  public highlightColor="orange";
  public titleColors = {
    "color":"blue",
    "font-style":"italic"
  }
  constructor() { }

  ngOnInit() {
  }

}
