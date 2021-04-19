import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { OTHER_PUBLICATIONS } from 'src/assets/data';
import { PublicationModel } from './data.model';

@Injectable({
  providedIn: 'root'
})
export class CommonsService {

  public publications = new Subject<PublicationModel[]>();
  public publications$ = this.publications.asObservable();

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  public getDataFromAPIs(): void {
    this.getPublications();
  }

  public getPublications(): void {

    let articlesToShow: PublicationModel[] = [];

    this.http.get<any>('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@madalinaeleonorag').subscribe(data => {

      switch (true) {
        case data.items.length > 4: articlesToShow = [...data.items.slice(0, 3)];
                                    break;
        case data.items.length < 4: articlesToShow = [...data.items, ...OTHER_PUBLICATIONS];
                                    break;
        default: articlesToShow = [...data.items];
                 break;
      }

      this.publications.next(articlesToShow);
    });

  }

  public openNewTab(link: string): void {
    window.open(link);
  }

  public navigateToURL(url: string): void {
    this.router.navigateByUrl(url);
  }
}
