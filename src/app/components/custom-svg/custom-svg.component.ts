import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-custom-svg',
  templateUrl: './custom-svg.component.html',
  styleUrls: ['./custom-svg.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CustomSvgComponent implements OnInit {

  @Input() type: string;

  constructor() { }

  ngOnInit(): void {
  }

}
