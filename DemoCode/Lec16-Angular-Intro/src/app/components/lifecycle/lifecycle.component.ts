import {
  Component,
  Input,
  OnChanges,
  OnInit,
  DoCheck,
  OnDestroy,
} from '@angular/core';

@Component({
  selector: 'app-lifecycle', // Why does this auto-target app.component.html?
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.css'],
})
// Import Lifecycle Hooks
export class LifecycleComponent
  implements OnInit, OnChanges, DoCheck, OnDestroy
{
  @Input() show: boolean = true; // Take in [show] property. If not provided, default to true

  // Class Instance Properties: No "let", "const", or "var"
  // (specific to OOP's like TypeScript)
  interval: any;
  count: number = 0;

  constructor() {
    console.log('constructor'); // 1
  }

  // Like componentDidUpdate(prevProps)- Triggers when @Input values change
  ngOnChanges() {
    console.log('ngOnChanges', this.show); // 2
  }

  // Like componentDidMount- called once after the first ngOnChanges()
  ngOnInit() {
    console.log('ngOnInit'); // 3
    this.interval = setInterval(() => {
      this.count++;
    }, 5000);
  }

  // Like componentDidUpdate- Runs on every change detection cycle
  ngDoCheck() {
    console.log('ngDoCheck', this.count); // 4
  }

  // Like componentWillUnmount - Used for cleanup
  ngOnDestroy() {
    console.log('ngOnDestroy'); // 5
    clearInterval(this.interval);
  }
}
