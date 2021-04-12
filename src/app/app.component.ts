import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CommonsService } from './commons.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  title = 'Project';

  constructor(private _commonsService: CommonsService) { }


  ngOnInit() {
    this.cookieConsoleMessage();
    this._commonsService.getDataFromAPIs()
  }

  private cookieConsoleMessage() {

    var consoleSignatureStyle = "font-size: 12px;" +
    "background: #a50c0c;" +
    "color: white;" +
    "text-align: center;" +
    "padding: 5px 10px;" +
    "margin: 5px 0;" +
    "width: 100%;" +
    "border-radius: 20px;";

    var consoleSignatureText = "%cDon't steal my cookies! 🍪";

    console.log(consoleSignatureText, consoleSignatureStyle);
  }
}
