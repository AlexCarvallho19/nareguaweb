import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router'
import { ProductsService } from '../products.service';
import { Products } from '../products.model';



@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {


  
  product: Products ={
    name: '',
    service:'',
    date:''
  }


  constructor(private productsService:ProductsService,
              private router:Router,
             ) {
               }

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
