import {
  Directive,
  HostBinding,
  HostListener,
  Input,
  OnChanges,
} from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {
  @Input() public appHighlight: boolean = false;
  @HostBinding('style.color') private color: string;
  @HostBinding('style.backgroundColor') private backgroundColor: string;

  constructor() {}

  @HostListener('click', ['$event'])
  onClick() {
    if (!this.appHighlight) {
      this.backgroundColor = 'hsl(25, 97%, 53%)';
      this.color = 'white';
      this.appHighlight = true;
    } else {
      this.backgroundColor = 'hsl(213, 19%, 18%)';
      this.color = 'hsl(216, 12%, 54%)';
      this.appHighlight = false;
    }
  }
}
