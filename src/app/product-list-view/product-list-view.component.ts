import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-product-list-view',
  templateUrl: './product-list-view.component.html',
  styleUrls: ['./product-list-view.component.css']
})
export class ProductListViewComponent {
constructor(private api:ApiService){
  api.listView().subscribe(
    (resp:any)=>{
      this.data=resp
    }
  )
}
data:any=[]
}
