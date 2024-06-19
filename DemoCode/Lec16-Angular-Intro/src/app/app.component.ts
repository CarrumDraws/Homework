import { Component } from '@angular/core';

// @Component defines a Component (Reusable UI Element)! An Angular module is a collection of them.
// They consist of a Typescript File, HTMl File, and CSS File.
// Each component defines a 'view' (a portion of the screen) and it's logic!
// Takes in metadata object with properties selector, templateUrl, styleUrls, styleUrls
@Component({
  // CSS Selector that targets an HTML element in the template
  // (Looks for <app-root></app-root> in index.html, replaces it with AppComponent)
  selector: 'app-root',

  // Path to this component's html file
  templateUrl: './app.component.html',

  // Path to this component's css file, can have multiple
  styleUrls: ['./app.component.css'],
})
// Properties(aka State), Methods, Lifecycle Hooks, are all defined here.
export class AppComponent {
  show: boolean = true; // Acts as state! Scoped to our class
  toggleShow(): void {
    this.show = !this.show;
  }

  names: string[] = ['John', 'Jane', 'Jack'];
  addName(): void {
    this.names.push('Joe');
    console.table(this.names);
  }

  number: number = 0;
  changeNumber(num: number): void {
    this.number = num;
  }
}
