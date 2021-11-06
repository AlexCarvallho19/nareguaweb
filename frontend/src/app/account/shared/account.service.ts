import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {User}from './user.model';
import { map, catchError} from "rxjs/operators";
import { Observable, EMPTY } from "rxjs"


@Injectable({
  providedIn: 'root'
})
export class AccountService {

  baseUrl = "http://localhost:3001/users";

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
  
  read(): Observable<User[]> {
    return this.http.get<User[]>(this.baseUrl).pipe(
      map((obj) => obj)
    );
  }

  readById(id: number): Observable<User> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<User>(url).pipe(
      map((obj) => obj)
    );
  }

  delete(id: number): Observable<User> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<User>(url).pipe(
      map((obj) => obj)
    );
  }  

 

}
