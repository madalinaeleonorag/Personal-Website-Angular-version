import { Directive, ElementRef, Input, OnChanges } from '@angular/core';

@Directive({
  selector: '[appProgressBarColors]'
})
export class ProgressBarColorsDirective implements OnChanges {
  static counter = 0;
  color: string;
  @Input() appProgressBarColors: any;
  styleEl: HTMLStyleElement = document.createElement('style');

  // generate unique attribute which we will use to minimize the scope of our dynamic style
  uniqueAttr = `app-progress-bar-color-${ProgressBarColorsDirective.counter++}`;

  constructor(private el: ElementRef) {
    const nativeEl: HTMLElement = this.el.nativeElement;
    nativeEl.setAttribute(this.uniqueAttr, '');
    nativeEl.appendChild(this.styleEl);
  }

  ngOnChanges(): void {
    this.updateColor();
  }


  updateColor(): void {
    this.styleEl.innerText =
      `[${this.uniqueAttr}] .mat-progress-bar-fill::after {
              background-color: ${this.appProgressBarColors};
          }`;
  }
}
