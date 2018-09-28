import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {promise} from 'selenium-webdriver';
import {I18nService} from '@app/core';


@Injectable({
  providedIn: 'root'
})
export class MovieDBService {
  URL = 'https://damp-island-67326.herokuapp.com/';
 // URL = 'localhost:8080';


  constructor( private http: HttpClient, private i18nService: I18nService) {  }


  getSearch (type: string, page: number): Promise<any> {
    return this.http
      .get<any[]>(this.URL + type  + '/trending/' + page )
      .toPromise();

  }

  getSearchWithParameters(criteria: string, type: string, pageNumber: number): Promise<any> {
    return this.http
      .get<any[]>(this.URL + type + '/' + criteria + '/' + pageNumber)
      .toPromise();
  }

  getDetails(id: number, type: string): Promise<any> {
    return this.http.get<any[]>(this.URL +
      type + '/' +
      id)
      .toPromise();

  }

  getRequestToken() {
    return this.http.get<any[]>(this.URL + 'auth/rToken' ).toPromise();
  }

  getSessionDetails( requestToken: string) {
    return this.http.get<any[]>(this.URL + 'auth/sessionid/' + requestToken ).toPromise();
  }


}
