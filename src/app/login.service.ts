import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http: HttpClient
  ) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  login(email: string, password: string) : Observable<{message: string, token: string}> {
    console.log("loginservice works");
    return this.http.post<{message: string, token: string}>('http://localhost:3000/login', { email: email, password: password }, this.httpOptions);
  }
}
