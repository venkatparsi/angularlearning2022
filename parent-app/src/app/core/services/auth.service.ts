import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ctldurl } from '../../global';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { }

  login(userDataInHeaders) {
    const headers = new HttpHeaders(userDataInHeaders);
    return this.httpClient.post(ctldurl + '/session/v1', null,
      { headers: headers, observe: 'response' });
  }
}
