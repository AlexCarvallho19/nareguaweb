import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { CalendarOptions } from '@fullcalendar/angular';

@Component({
  selector: 'app-product-crud',
  templateUrl: './product-crud.component.html',
  styleUrls: ['./product-crud.component.css']
})
export class ProductCrudComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
    navigateToProductCreate(): void {
      this.router.navigate(['/products/create'])
    }
    calendarOptions: CalendarOptions = {
      initialView: 'dayGridMonth'
    };

}
