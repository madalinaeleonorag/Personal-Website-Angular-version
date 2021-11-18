import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CommonsService } from 'src/app/commons.service';
import { ExperienceModel } from 'src/app/data.model';
import { CustomDialogComponent } from '../custom-dialog/custom-dialog.component';

@Component({
  selector: 'app-experience-card',
  templateUrl: './experience-card.component.html',
  styleUrls: ['./experience-card.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ExperienceCardComponent implements OnInit {

  @Input() data: ExperienceModel;

  constructor(public dialog: MatDialog, private commonsService: CommonsService) { }

  ngOnInit(): void {
  }

  public openDialog(type: string, data: any): void {
    this.dialog.open(CustomDialogComponent, {
      height: '80vh',
      width: '70vw',
      data: {type, data}
    });
  }

  public openCV(): void {
    this.commonsService.openNewTab('./../../../assets/CV.pdf');
  }
}
