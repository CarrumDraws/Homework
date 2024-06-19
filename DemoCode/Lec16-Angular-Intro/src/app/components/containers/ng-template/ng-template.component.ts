import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-template',
  templateUrl: './ng-template.component.html',
  styleUrls: ['./ng-template.component.css'],
})
export class NgTemplateComponent {
  show: boolean = true;

  numbers: number[] = [1, 2, 3, 4, 5];
}
