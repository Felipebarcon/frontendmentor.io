import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { Event } from '@angular/router';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {
  @Input() public appHighlight: boolean;
  @HostBinding('style.color') private color: string;
  @HostBinding('style.backgroundColor') private backgroundColor: string;

  constructor(public el: ElementRef) {}

  @HostListener('click', ['$event'])
  onClick() {
    let clicked: number = 0;
    if (!this.appHighlight && clicked <= 1) {
      this.backgroundColor = 'hsl(25, 97%, 53%)';
      this.color = 'white';
      this.appHighlight = true;
      clicked++;
      console.log(clicked);
    } else {
      this.backgroundColor = 'hsl(213, 19%, 18%)';
      this.color = 'hsl(216, 12%, 54%)';
      this.appHighlight = false;
    }
  }
}
