import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AirSerivceService {

  constructor(private http: HttpClient) { }

  getAir() {
    let url="http://nmflightapi.azurewebsites.net/api/flight"
    return this.http.get(url);
  }
}
