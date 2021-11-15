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
    console.log(this.data)
    this.data.logo = this.data.logo ? this.data.logo : this.data.image;
    this.data.name = this.data.name ? this.data.name : this.data.title;
  }

  public openNewTab(type: string): void {
    switch (type) {
      case 'live': this.commonsService.openNewTab(this.data.live);
                   break;
      case 'code': this.commonsService.openNewTab(this.data.code);
                   break;
    }
  }

  public openDialog(type: string, data: any): void {
    this.dialog.open(CustomDialogComponent, {
      data: { type, data }
    });
  }
}
