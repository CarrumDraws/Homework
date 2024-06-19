import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent implements AfterViewInit {
  // @ViewChild: Access a Child/DOM Component from the Parent
  @ViewChild(ChildComponent)
  child!: ChildComponent; // Assign ChildComponent to the 'child' property ('!' = property will be assigned after component initialization)

  // ngAfterViewInit: Lifecycle Hook called after Angular has initialized a component's (and its childs') views
  ngAfterViewInit(): void {
    console.log(this.child); // ChildComponent now accessible!
  }

  increment(): void {
    this.child.increment(); // You can even call ChildComponent's Methods
  }
}
