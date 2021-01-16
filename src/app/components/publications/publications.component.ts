import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PublicationsComponent implements OnInit {

  @Input() publication;

  constructor() { }

  ngOnInit(): void {
  }

}
