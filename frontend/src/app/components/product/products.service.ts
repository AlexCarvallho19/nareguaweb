import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'
import { HttpClient } from '@angular/common/http';
import { Products } from './products.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private baseURL = "http://localhost:3003/products"
  constructor(private snackbar: MatSnackBar, private http: HttpClient) { }

  showMessageteste(msg:string): void {
    this.snackbar.open(msg,'X',{
      duration: 3000,
      horizontalPosition:'right',
      verticalPosition:'top'
    })
  }
  create(products:Products): Observable<Products> {
    return this.http.post<Products>(this.baseURL, products)
  }
}
