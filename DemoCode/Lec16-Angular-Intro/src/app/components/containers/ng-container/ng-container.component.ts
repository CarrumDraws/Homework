import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-container',
  templateUrl: './ng-container.component.html',
  styleUrls: ['./ng-container.component.css'],
})
export class NgContainerComponent {
  numbers: number[] = [1, 2, 3, 4, 5];
}
