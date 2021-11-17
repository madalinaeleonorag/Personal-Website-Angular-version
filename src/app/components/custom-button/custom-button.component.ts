import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-custom-button',
  templateUrl: './custom-button.component.html',
  styleUrls: ['./custom-button.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CustomButtonComponent implements OnInit {

  @Input() buttonText: string;

  constructor() { }

  ngOnInit(): void {
  }

}

