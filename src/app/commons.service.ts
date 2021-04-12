import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { OTHER_PUBLICATIONS } from 'src/assets/data';

@Injectable({
  providedIn: 'root'
})
export class CommonsService {

  public _publications = new Subject<any[]>();
  public publications$ = this._publications.asObservable();

  constructor(
    private _http: HttpClient
  ) { }

  public getDataFromAPIs() {
    this.getPublications();
  }

  public getPublications() {
    
    let articlesToShow:any[] = [];

    this._http.get<any>('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@madalinaeleonorag').subscribe(data => {

      switch (true) {
        case data['items'].length > 4: articlesToShow = [...data['items'].slice(0, 3)];
        break;
        case data['items'].length < 4: articlesToShow = [...data['items'], ...OTHER_PUBLICATIONS];
        break;
        default: articlesToShow = [...data['items']];
        break;
      }

      this._publications.next(articlesToShow);
    });

  }
}
