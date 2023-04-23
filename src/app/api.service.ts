import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) {}
  productView=()=>{
    return this.http.get("http://localhost:8080/product/getallproduct")
  } 
 productAdd=(data:any)=>{
  return this.http.post("http://localhost:8080/product/addproduct",data)

 }
  listView=()=>{
    return this.http.get("http://localhost:8080/product/getallproduct")
  }
}
