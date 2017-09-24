import { Component, OnInit } from '@angular/core';
import { ProductService} from './product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  providers: [ProductService]
})
export class ProductsComponent implements OnInit {

   products;

   isValid = false;
   onClickThis($event){
	   console.log("Clicked",$event)
   }

    constructor(productService: ProductService){
        this.products = productService.getProducts();
    }

  ngOnInit() {
  }

}
