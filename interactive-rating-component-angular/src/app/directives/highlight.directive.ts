import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {
  constructor(private el: ElementRef) {}

  @HostListener('click', ['$event']) OnClick(e: MouseEvent) {
    console.log(e.target);
    this.el.nativeElement.child.class.add('component--rating-active');
  }
}
