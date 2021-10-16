import { Component, OnInit } from '@angular/core';
import { ProductService } from './../product.service'
import { Router} from '@angular/router'
import { Schedule } from '../schedule.model';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  schedule: Schedule = {
    title:'',
    start: '',
    end: ''
  } 

  constructor(private productService:ProductService,
              private router:Router) { }

  ngOnInit(): void {
    
  }
  
  createProduct():void {
    this.productService.create(this.schedule).subscribe(()=>{
      this.productService.showMessage('Agendamento criado')
      this.router.navigate(['/products'])
    })
    
  }
  cancelProduct():void {
    this.router.navigate(['/products'])
  }

}
