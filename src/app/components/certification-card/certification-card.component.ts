import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { CommonsService } from 'src/app/commons.service';

@Component({
  selector: 'app-certification-card',
  templateUrl: './certification-card.component.html',
  styleUrls: ['./certification-card.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CertificationCardComponent implements OnInit {

  @Input() item: any;

  constructor(private commonService: CommonsService) { }

  ngOnInit(): void {
  }

  public open(): void {
    this.commonService.openNewTab(this.item.url);
  }
}
