import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private router: Router, private commonsService: CommonsService) {
    this.router.events.subscribe(() => {
      this.selectedPageUrl = router.url.toString();
    });
  }

  ngOnInit(): void {
    this.commonsService.changeTheme$.subscribe(isDarkTheme => {
      this.isDarkThemeSelected = isDarkTheme;
      this.themeEmoji = isDarkTheme ? '☀️' : '🌙';
    });
  }

  public goToPage(page: string): void {
    this.commonsService.navigateToURL(`${page}`);
  }

  public isPageSelected(page: string): boolean {
    return page === this.selectedPageUrl;
  }

  public openCV(): void {
    this.commonsService.openNewTab('./../../../assets/CV.pdf');
  }

  public changeTheme(): void {
    this.isDarkThemeSelected
      ? this.commonsService.changeTheme.next(false)
      : this.commonsService.changeTheme.next(true);
  }
}
