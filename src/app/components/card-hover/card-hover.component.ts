import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CommonsService } from 'src/app/commons.service';
import { CustomDialogComponent } from '../custom-dialog/custom-dialog.component';

@Component({
  selector: 'app-card-hover',
  templateUrl: './card-hover.component.html',
  styleUrls: ['./card-hover.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CardHoverComponent implements OnInit {

  @Input() data: any;

  constructor(private commonsService: CommonsService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.data.logo = this.data.logo ? this.data.logo : this.data.image ? this.data.image : this.data.thumbnail;
    this.data.name = this.data.name ? this.data.name : this.data.title;
    this.data.live = this.data.live ? this.data.live : this.data.link;
    this.data.technologies = this.data.technologies ? this.data.technologies : this.data.categories;
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
