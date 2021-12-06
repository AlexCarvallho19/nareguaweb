import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'
import { HttpClient } from '@angular/common/http';
import { Products } from './products.model';
import { Observable } from 'rxjs';
import { Router} from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
 
  eventos: Products[] = [];
 
  private baseURL = "http://localhost:3001/Eventos"
  constructor(private snackbar: MatSnackBar, private http: HttpClient, private router:Router) { }

  showMessageteste(msg:string): void {
    this.snackbar.open(msg,'X',{
      duration: 3000,
      horizontalPosition:'right',
      verticalPosition:'top'
    })
  }
  create(product:Products): Observable<Products> {
    this.http.get<Products[]>(this.baseURL).subscribe(response =>{
      response.forEach(evento => {
        console.log(product.time)
        if(evento.time == product.time){
          console.log("Conflito de horário!")
          window.alert("Conflito de horário.")
          this.router.navigate(['/products'])
          return null;
        }
      });
      window.alert("Agendado com sucesso!")
      return this.http.post<Products>(this.baseURL, product)
    })
    return null;

    
    /*
    if(this.getSchedule(product) === this.http.get<Products[]>(this.baseURL)){
      this.showMessageteste('Horário indisponível.')
      this.router.navigate(['/products'])
    }*/
    
  }
  read():Observable<Products[]>{
    return this.http.get<Products[]>(this.baseURL)
  }
  getSchedule(product:Products):Observable<Products[]>{
    return this.http.get<Products[]>(this.baseURL)
  }
}
