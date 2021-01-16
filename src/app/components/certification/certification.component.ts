import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-certification',
  templateUrl: './certification.component.html',
  styleUrls: ['./certification.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CertificationComponent implements OnInit {

  @Input() certificate;
  
  constructor() { }

  ngOnInit(): void {
  }

}
