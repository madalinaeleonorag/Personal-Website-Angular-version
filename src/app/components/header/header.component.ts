import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {
  selectedPageUrl: string = '/';

  constructor(private router: Router) {
    this.router.events.subscribe(value => {
      this.selectedPageUrl = router.url.toString();
    });
  }

  ngOnInit(): void {
  }

  goToPage(page: string) {
    this.router.navigateByUrl(`${page}`);
  }

  isPageSelected(page: string) {
    return page === this.selectedPageUrl;
  }

}
