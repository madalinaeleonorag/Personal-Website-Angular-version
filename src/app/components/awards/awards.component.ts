import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-awards',
  templateUrl: './awards.component.html',
  styleUrls: ['./awards.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AwardsComponent implements OnInit {

  @Input() award: any;
  place: string;

  constructor() { }

  ngOnInit(): void {
    switch (this.award.place) {
      case 1: this.place = 'first-place';
        break;
      case 2: this.place = 'second-place';
        break;
      case 3: this.place = 'third-place';
        break;
      default: this.place = 'mention-place';
        break;
    }
  }

}
