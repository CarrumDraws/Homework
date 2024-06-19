import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LifecycleComponent } from './components/lifecycle/lifecycle.component';
import { ChangeDetectionComponent } from './components/change-detection/change-detection.component';
import { StructuralComponent } from './components/directives/structural/structural.component';
import { AttributeComponent } from './components/directives/attribute/attribute.component';
import { CustomComponent } from './components/directives/custom/custom.component';
import { HighlightDirective } from './directives/highlight.directive';
import { ParentComponent } from './components/viewChild/parent/parent.component';
import { ChildComponent } from './components/viewChild/child/child.component';
import { NgTemplateComponent } from './components/containers/ng-template/ng-template.component';
import { NgContainerComponent } from './components/containers/ng-container/ng-container.component';
import { NgContentComponent } from './components/containers/ng-content/ng-content.component';
import { BindingComponent } from './components/binding/binding.component';
import { TwoWayBindingComponent } from './components/two-way-binding/two-way-binding.component';

// Root Module
// @NgModule defines a Module! An Angular app is a collection of these modules.
// Takes in a metadata object that describes how to compile + run the module code.
@NgModule({
  // Decalres all components, directives, pipes, etc that belong to this module!
  declarations: [
    AppComponent,
    LifecycleComponent,
    ChangeDetectionComponent,
    StructuralComponent,
    AttributeComponent,
    CustomComponent,
    HighlightDirective,
    ParentComponent,
    ChildComponent,
    NgTemplateComponent,
    NgContainerComponent,
    NgContentComponent,
    BindingComponent,
    TwoWayBindingComponent,
  ],

  // Import other modules!
  // FormsModule, HttpClientModule, RouterModule, etc.
  imports: [BrowserModule],

  // For services- used for Dependency Injections
  providers: [],

  // Bootstrap (verb): To initialize or start up an application
  // This is our entrypoint! We load and launch the Angular app, starting with AppComponent.
  // (Note: Typically only have 1)
  bootstrap: [AppComponent],
})
export class AppModule {}
