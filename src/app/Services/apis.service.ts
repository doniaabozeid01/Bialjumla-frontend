import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApisService {

  constructor(private http: HttpClient, private router: Router) { }

  baseUrl: string = "https://localhost:7096/api/";

  Login(body: any): Observable<any> {
    return this.http.post(`${this.baseUrl}Account/login`, body)
  }

  Register(body: any): Observable<any> {
    return this.http.post(`${this.baseUrl}Account/userRegister`, body)
  }
}
