import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private api = 'https://mailthis.to/madalinaeleonora.gheorghe@gmail.com'

  constructor(private http: HttpClient) { }

  PostMessage(input: any) {
    return this.http.post(this.api, input).pipe(
      map(
        (response) => {
          if (response) {
            return response;
          }
        },
        (error: any) => {
          return error;
        }
      )
    )
  }
}


