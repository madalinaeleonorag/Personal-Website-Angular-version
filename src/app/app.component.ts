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
    this.cookieConsoleMessage();
    this.commonsService.getDataFromAPIs();
  }

  private cookieConsoleMessage(): void {

    const consoleSignatureStyle = 'font-size: 12px;' +
    'background: #a50c0c;' +
    'color: white;' +
    'text-align: center;' +
    'padding: 5px 10px;' +
    'margin: 5px 0;' +
    'width: 100%;' +
    'border-radius: 20px;';

    const consoleSignatureText = '%cDon\'t steal my cookies! 🍪';

    console.log(consoleSignatureText, consoleSignatureStyle);
  }
}
