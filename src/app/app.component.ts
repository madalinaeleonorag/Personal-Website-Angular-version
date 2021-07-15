import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CommonsService } from './commons.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {

  constructor(private commonsService: CommonsService) { }

  ngOnInit(): void {
    this.commonsService.getDataFromAPIs();
    this.commonsService.cookieConsoleMessage();
  }
}
