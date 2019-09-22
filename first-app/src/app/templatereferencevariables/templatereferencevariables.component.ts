import { Component, OnInit } from '@angular/core';

@Component({
  selector: '.app-templatereferencevariables',
  template: `
    <h2>Template Reference Variables</h2>
    <input #myInput type='text' />
    <button (click)='logMessage(myInput.value)'>Log</button>
  `,
  styleUrls: ['./templatereferencevariables.component.scss']
})
export class TemplatereferencevariablesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  logMessage(value){
    console.log("input value : "+value);
  }

}
