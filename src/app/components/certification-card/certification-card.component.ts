import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-certification-card',
  templateUrl: './certification-card.component.html',
  styleUrls: ['./certification-card.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CertificationCardComponent implements OnInit {

  @Input() item: any;

  constructor() { }

  ngOnInit(): void {
  }
}
