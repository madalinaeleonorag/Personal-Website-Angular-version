import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { CommonsService } from 'src/app/commons.service';

@Component({
  selector: 'app-card-hover',
  templateUrl: './card-hover.component.html',
  styleUrls: ['./card-hover.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CardHoverComponent implements OnInit {

  @Input() data: any;

  constructor(private commonsService: CommonsService) { }

  ngOnInit(): void {
  }

  public openNewTab(type: string): void {
    switch (type) {
      case 'live': this.commonsService.openNewTab(this.data.live);
                   break;
      case 'code': this.commonsService.openNewTab(this.data.code);
                   break;
    }
  }
}
