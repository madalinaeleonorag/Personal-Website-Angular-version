import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { PublicationModel } from 'src/app/data.model';

@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PublicationsComponent implements OnInit {

  @Input() publication: PublicationModel;

  constructor() { }

  ngOnInit(): void {
  }

}
