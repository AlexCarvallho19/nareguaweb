import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Products } from '../products.model';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  eventos: Products[] = [];
  displayedColumns = ['id','name','time','date']
  constructor(private productsService:ProductsService,private http: HttpClient) { }

  ngOnInit(): void {
    this.productsService.read().subscribe(eventos => {
      this.eventos = eventos
      console.log(eventos)
    })
  }
  
}
