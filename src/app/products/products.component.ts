import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  constructor(private api:ApiService){
    api.productView().subscribe(
      (response:any)=>{
        this.product=response
        this.loading=false
      }
    )

  }
  product:any=[]
  loading:boolean=true

}
