import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CommonsService } from 'src/app/commons.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {

  private selectedPageUrl = '/';
  private isDarkThemeSelected = false;

  public themeEmoji: string;

  constructor(private commonsService: CommonsService) {
  }

  ngOnInit(): void {
  }

  public isPageSelected(page: string): boolean {
    return page === this.selectedPageUrl;
  }

  public openCV(): void {
    this.commonsService.openNewTab('./../../../assets/CV.pdf');
  }
}
