import {
  Component,
  Input,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
} from '@angular/core';

@Component({
  selector: 'app-change-detection',
  templateUrl: './change-detection.component.html',
  styleUrls: ['./change-detection.component.css'],
  // Set changeDetection to ChangeDetectionStrategy.OnPush.
  // Defaults to ChangeDetectionStrategy.Default (CheckAlways)
  changeDetection: ChangeDetectionStrategy.OnPush, // Determines frequency of change detection cycles
})
// CheckAlways : Checks for changes in every component at evey change detection cycle. View is updated but inefficient
// OnPush : Checks for changes when @Input properties change, Events are emmitted from this comp/children, or its explicitly triggered with ChangeDetectorRef. Use whenever possible! "Component only depends on its inputs"
export class ChangeDetectionComponent {
  @Input() names: string[] = [];

  // Service : A class with reusable functionality. Must use Dependancy Injection- lifecycle and Instantiation wil be managed
  // Dependancy Injection: Services are injected by passing them as params to the constructor()
  constructor(private cdr: ChangeDetectorRef) {} // ChangeDetectorRef lets you control Change Detectors with detectChanges(), markForCheck(), detatch(), reattatch()

  // Connects to Update Button in HTML
  update(): void {
    this.cdr.detectChanges(); // Manually trigger a Change Detection Cycle in this comp and its children
  }
}
