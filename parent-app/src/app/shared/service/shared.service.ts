import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private httpService: HttpClient) { }


  getMenu() {
    return this.httpService.get('assets/json/menu.json');
    // this.httpService.get(environment.baseURL + '', { headers: { 'X-SESSIONID': sessionStorage.getItem('session_id') } });
  }
}
