import { Component } from '@angular/core';

@Component({
  selector: 'app-structural',
  templateUrl: './structural.component.html',
  styleUrls: ['./structural.component.css'],
})
export class StructuralComponent {
  numbers: object[] = [
    { id: 1, value: 'One' },
    { id: 2, value: 'Two' },
    { id: 3, value: 'Three' },
  ];
  // index and item are auto-passed into trackByFn
  trackByFn(index: number, item: any): number {
    return item.id; // Return unique identifier of the item
  }

  showTitle: boolean = true;

  switchCase: string = 'a';
}
