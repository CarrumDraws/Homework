import { Component } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css'],
})
export class BindingComponent {
  srcs: string[] = [
    'https://picsum.photos/seed/1/350/200',
    'https://picsum.photos/seed/2/350/200',
    'https://picsum.photos/seed/3/350/200',
    'https://picsum.photos/seed/4/350/200',
    'https://picsum.photos/seed/5/350/200',
  ];

  index: number = 0;

  src: string = this.srcs[this.index];

  cycleImages(): void {
    this.index = (this.index + 1) % this.srcs.length;
    this.src = this.srcs[this.index];
  }
}
