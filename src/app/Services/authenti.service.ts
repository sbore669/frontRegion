import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


const Url = 'http://localhost:8080/api/auth/'

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthentiService {

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    return this.http.post(Url + 'signin', {
      username,
      password,
      
    }, httpOptions);
  }

  inscription(username: string, email: string, password: string): Observable<any> {
    return this.http.post(Url + 'signup', {
      username,
      email,
      password
    }, httpOptions);
  }
  logout(): Observable<any> {
    return this.http.post(Url + 'signout', { }, httpOptions);
  }
}
