import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { CommonsService } from 'src/app/commons.service';

@Component({
  selector: 'app-custom-card',
  templateUrl: './custom-card.component.html',
  styleUrls: ['./custom-card.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CustomCardComponent implements OnInit {

  @Input() data: any = {};
  @Input() type: string;

  constructor(private commonsService: CommonsService) { }

  ngOnInit(): void {

    switch (this.type) {
      case 'project':
        this.data.image = this.data.logo;
        this.data.title = this.data.name;
        break;

      case 'publication':
        this.data.image = this.data.thumbnail;
        this.data.technologies = this.data.categories;
        this.data.startDate = this.getDate(this.data.pubDate);
        break;
    }
  }

  public seeDetailsProject(): void {
    this.commonsService.navigateToURL(`/project/${this.data.id}`);
  }

  public openNewTab(type: string): void {
    switch (type) {
      case 'live': this.commonsService.openNewTab(this.data.live);
                   break;
      case 'code': this.commonsService.openNewTab(this.data.code);
                   break;
      case 'publication': this.commonsService.openNewTab(this.data.link);
                          break;
    }
  }

  private getDate(date: string): string {
    return new Date(date).toLocaleString('default', { month: 'long' }).substr(0, 3) + ' ' + new Date(date).getFullYear();
  }
}
