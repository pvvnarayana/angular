import { Component, OnInit } from '@angular/core';

@Component({
  selector: '.app-test',
  template: `<h2>codeJava</h2>
              <input type='text' value='CodeJava' />
              <h2 class='text-success'>codeJava</h2>
              <h2 class='text-error'>codeJava</h2>
              <h2 class='text-special'>codeJava</h2>
              <h2 [class.text-error]='hasError' >codeJava</h2>
              <h2 [class.text-special]='isSpecial' >codeJava</h2>
              <h2 [ngClass]='testClass' >codeJava</h2>
              `,
  styles: [`
    .text-success{
      color:green
    }
    .text-error{
      color:red
    }
    .text-special{
      font-style:italic
    }
  `]
})
export class TestComponent implements OnInit {

  public hasError = false;
  public isSpecial = true;
  public testClass = {

    "text-success": !this.hasError,
    "text-error": this.hasError,
    "text-special": this.isSpecial
  };

  constructor() { }

  ngOnInit() {
  }

}
