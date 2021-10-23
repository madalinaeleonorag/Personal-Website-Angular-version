import { Component, ElementRef, OnInit, ViewEncapsulation } from '@angular/core';
import { CommonsService } from './commons.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {

  constructor(private commonsService: CommonsService,  private el: ElementRef) { }

  ngOnInit(): void {
    this.commonsService.getDataFromAPIs();
    this.commonsService.cookieConsoleMessage();

    this.commonsService.changeTheme$.subscribe(isDarkTheme => {
        if (isDarkTheme === true) {
          localStorage.setItem('theme', 'dark');
          (this.el.nativeElement as HTMLElement).style.setProperty('--black', ' #170404');
          (this.el.nativeElement as HTMLElement).style.setProperty('--white', ' #fff');
          (this.el.nativeElement as HTMLElement).style.setProperty('--background', ' #1c0505');
          (this.el.nativeElement as HTMLElement).style.setProperty('--darkPrimary', ' #fcdede');
          (this.el.nativeElement as HTMLElement).style.setProperty('--lightgray', ' #621111');
        } else {
          localStorage.setItem('theme', 'light');
          (this.el.nativeElement as HTMLElement).style.setProperty('--black', ' #fff');
          (this.el.nativeElement as HTMLElement).style.setProperty('--white', ' #170404');
          (this.el.nativeElement as HTMLElement).style.setProperty('--background', '#fffafa');
          (this.el.nativeElement as HTMLElement).style.setProperty('--darkPrimary', '#621111');
          (this.el.nativeElement as HTMLElement).style.setProperty('--lightgray', '#fcdede');
        };
    });
  }
}
