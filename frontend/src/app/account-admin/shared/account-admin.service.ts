import { Admin } from './../../account-admin/shared/admin.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError} from "rxjs/operators";
import { Observable, EMPTY } from "rxjs"

@Injectable({
  providedIn: 'root'
})
export class AccountAdminService {

  baseUrl = "http://localhost:3001/admin";

  constructor(private http: HttpClient ) { }

  loginAdmin(admin:any) {
    return new Promise((resolve) => {
      window.localStorage.setItem('token', 'admin-token');
      resolve(true);
    });
  }

  readByIdAdmin(id: number): Observable<Admin> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Admin>(url).pipe(map((obj) => obj));
  
  }

  updateAdmin(product: Admin): Observable<Admin> {
    const url = `${this.baseUrl}/${product.id}`;
    return this.http.put<Admin>(url, product).pipe(
      map((obj) => obj)
    );
  }

}
