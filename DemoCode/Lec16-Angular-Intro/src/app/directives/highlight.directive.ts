import { Directive, HostListener, ElementRef, Input } from '@angular/core';

// Decorators: TypeScript Feature that allows you to annotate/modify classes, properties, methods, parameters, or accessors at design time. Lets you add metadata.

// @Directive: Mark's a class as a Directive
@Directive({
  selector: '[appHighlight]', // [Selector Name]
})
// (Imported into our main app.module!)
export class HighlightDirective {
  // Input property name must match selector!
  // @Input: Defines Input Properties
  @Input() appHighlight: string | undefined;

  // Use Dependancy Injection for ElementRef class
  constructor(private el: ElementRef) {}

  // @HostListener: Attatch listeners to the host element
  @HostListener('mouseenter') onMouseEnter() {
    this.el.nativeElement.style.backgroundColor = this.appHighlight ?? 'blue';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.el.nativeElement.style.backgroundColor = null;
  }
}
