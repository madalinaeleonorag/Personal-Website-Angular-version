import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-custom-social-card',
  templateUrl: './custom-social-card.component.html',
  styleUrls: ['./custom-social-card.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CustomSocialCardComponent implements OnInit {

  @Input() text: string;
  @Input() type: string;
  @Input() link: string;
  
  constructor() { }

  ngOnInit(): void {
  }

}
