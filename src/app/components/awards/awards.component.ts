import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-awards',
  templateUrl: './awards.component.html',
  styleUrls: ['./awards.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AwardsComponent implements OnInit {

  @Input() award;
  constructor() { }

  ngOnInit(): void {
  }

}
