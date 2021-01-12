import { Directive, ElementRef, Input, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appProgressBarColors]'
})
export class ProgressBarColorsDirective {
  static counter = 0;
  color: string;
  @Input() appProgressBarColors;
  styleEl: HTMLStyleElement = document.createElement('style');

  //generate unique attribule which we will use to minimise the scope of our dynamic 
  style
  uniqueAttr = `app-progress-bar-color-${ProgressBarColorsDirective.counter++}`;

  constructor(private el: ElementRef) {
    const nativeEl: HTMLElement = this.el.nativeElement;
    nativeEl.setAttribute(this.uniqueAttr, '');
    nativeEl.appendChild(this.styleEl);
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.updateColor();
  }


  updateColor(): void {
    this.styleEl.innerText =
      `[${this.uniqueAttr}] .mat-progress-bar-fill::after {
              background-color: ${this.appProgressBarColors};
          }`;
  }
}
