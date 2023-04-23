import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent {
  name=""
  manufactureDate=""
  price=""
  quantity=""
  description=""
  urlimage=""
  constructor(private api:ApiService){}
  read=()=>{
    let data:any={
      "name":this.name,
      "manufactureDate":this.manufactureDate,
      "price":this.price,
      "quantity":this.quantity,
      "description":this.description,
      "urlimage":this.urlimage
    }
    this.api.productAdd(data).subscribe(
      (resp:any)=>{
        console.log(resp)
      }
    )
    console.log(data)
  }

}
