import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { CommonsService } from 'src/app/commons.service';
import { PublicationModel } from 'src/app/data.model';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ArticlesComponent implements OnInit {

  @Input() publications: PublicationModel[] = [];

  constructor(private commonsService: CommonsService) { }

  ngOnInit(): void {
  }


  public getData(date: any): any {
    return new Date(date).toLocaleString('default', { month: 'long' }).substr(0, 3) + ' ' + new Date(date).getFullYear();
  }
  public openMedium(): void {
    this.commonsService.openNewTab('https://madalinaeleonorag.medium.com/');
  }
}
