import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {User}from './user.model';
import { map, catchError} from "rxjs/operators";
import { Observable, EMPTY } from "rxjs"


@Injectable({
  providedIn: 'root'
})
export class AccountService {

  baseUrl = "http://localhost:3001/Users";

  constructor(private http: HttpClient) { }

  login(user:any) {
    return new Promise((resolve) => {
      window.localStorage.setItem('token', 'meu-token');
      resolve(true);
    });
  }

  createAccount(user: User): Observable<User> {
    return this.http.post<User>(this.baseUrl, user).pipe(
      map((obj) => obj)
    );
  }
  

}
