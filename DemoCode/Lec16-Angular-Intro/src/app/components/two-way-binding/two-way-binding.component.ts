import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-two-way-binding',
  templateUrl: './two-way-binding.component.html',
  styleUrls: ['./two-way-binding.component.css'],
})
export class TwoWayBindingComponent {
  // The input variable name must match whatever you put inside the [] in your parent component when doing property binding
  @Input() number: number = 0;

  // The output variable name must match whatever you put inside the () in your parent component when doing event binding
  // If you are doing two-way binding, the variable name for output must be `${inputName}Change`
  @Output() numberChange = new EventEmitter<number>();

  // This function is used to bind to the child component's button's click event
  increment() {
    this.numberChange.emit(++this.number);
  }

  // Workflow for custom event binding:
  /* 
    1. create a function in the parent component which has one parameter that represents the updated data

    2. bind the function using event binding on the child element selector, make sure the function's argument is $event

    3. child takes in the function using @Output() and EventEmitter, the EventEmitter's type must match the parameter type of the parent function

    4. child defines a handler function that invokes the EventEmitter

    5. upon triggering the handler function in the child, it will emit the data back to the parent

    6. parent takes in the emitted data through the $event argument, which will pass it to the function defined in the parent component

    7. parent updates the data in the parent component
  */
}
