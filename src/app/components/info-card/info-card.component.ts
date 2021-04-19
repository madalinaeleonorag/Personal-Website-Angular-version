import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { CommonsService } from 'src/app/commons.service';

@Component({
  selector: 'app-info-card',
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class InfoCardComponent implements OnInit {

  @Input() item: any;

  constructor(private commonsService: CommonsService) { }

  ngOnInit(): void {
  }

  public openNewTab(): void {
    this.commonsService.openNewTab(this.item.url);
  }

}
