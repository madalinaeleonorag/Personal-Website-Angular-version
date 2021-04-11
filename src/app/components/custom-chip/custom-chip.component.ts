import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-custom-chip',
  templateUrl: './custom-chip.component.html',
  styleUrls: ['./custom-chip.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CustomChipComponent implements OnInit {

  @Input() text: string;

  constructor() { }

  ngOnInit(): void {
  }

}
