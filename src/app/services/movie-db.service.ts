import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {promise} from 'selenium-webdriver';
import {I18nService} from '@app/core';


@Injectable({
  providedIn: 'root'
})
export class MovieDBService {
  URL1 = 'https://api.themoviedb.org/3/trending/'
  URL2 = '/week?api_key=b51f316aae8c57c38fa870244f77731f';
  URLFIND1 = 'https://api.themoviedb.org/3/'
  URLFIND2 = '?language=' + this.i18nService.language + '&api_key=b51f316aae8c57c38fa870244f77731f'

  constructor( private http: HttpClient, private i18nService: I18nService) {  }


  getSearch (type: string, page: number): Promise<any> {
    return this.http
      .get<any[]>(this.URL1 + type +   this.URL2 + '&page=' + page )
      .toPromise();

  }

  getSearchWithParameters(criteria: string, type: string, pageNumber: number): Promise<any> {
    return this.http
      .get<any[]>(this.URLFIND1 + 'search/' +
        type +
        this.URLFIND2 + '&query=' +
        criteria +
        '&page=' +
        pageNumber +
        '&include_adult=false')
      .toPromise();
  }

  getDetails(id: number, type: string): Promise<any> {
    return this.http.get<any[]>(this.URLFIND1 +
      type + '/' +
      id  +
      this.URLFIND2)
      .toPromise();

  }
}
