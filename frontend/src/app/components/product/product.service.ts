import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'
import { Observable } from 'rxjs';
import { Schedule } from './schedule.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

 private baseURL = "http://localhost:3002/Eventos"

  constructor(private snackbar: MatSnackBar, private http: HttpClient) {
   }
   showMessage(msg:string) { 
    this.snackbar.open(msg,'X',{
      duration: 3000,
      horizontalPosition:'right',
      verticalPosition:'top'
    })
   }
   create(schedule:Schedule): Observable<Schedule> {
     return this.http.post<Schedule>(this.baseURL,schedule)
   }
  
}
