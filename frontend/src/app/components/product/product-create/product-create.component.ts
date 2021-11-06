import { Component, OnInit } from '@angular/core';
import { ProductService } from './../product.service'
import { Router} from '@angular/router'
import { Schedule } from '../schedule.model';
import { ProductsService } from '../products.service';
import { Products } from '../products.model';


@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  product: Products ={
    title: '',
    start:'',
    end:''
  }


  constructor(private productsService:ProductsService,
              private router:Router) { }

  ngOnInit(): void {
    
  }
  
  createProduct():void {
        this.productsService.create(this.product).subscribe(()=> {
          this.productsService.showMessageteste('Agendamento criado')
          this.router.navigate(['/products'])
        })
        
      
    }
    
  
  cancelProduct():void {
    this.router.navigate(['/products'])
  }


}
