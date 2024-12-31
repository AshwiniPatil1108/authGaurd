import { Injectable } from '@angular/core';
import { Iproducts } from '../model/products';
import { Router } from '@angular/router';
import { SnackBarService } from './snack-bar.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  //1 create arrray and interafce
productsArr: Array<Iproducts> =[
  {
    pname:'Samsung M31',
    pid: "123",
    pstatus :"In-progress",
    canReturn: 1
  },
  {
    pname:'Samsung TV',
    pid: "124",
    pstatus :"Dispatched",
    canReturn: 1
  },
  {
    pname:'Iphone',
    pid: "125",
    pstatus :"Delivered",
    canReturn: 0
  }
]

  constructor(
    private _router : Router,
    private _snackBar : SnackBarService
  ) { }
//2 create func for fetch go to products.html
  fetchAllProducts(){
    return this.productsArr
  }
  fetchProduct(id:string){
    //api call to  fetch the product data
    return this.productsArr.find(prod=> prod.pid === id)!//go to product ts
  }
  postProduct(postObj : Iproducts){
    //api call to post data in DB
    this.productsArr.push(postObj);
    this._router.navigate(['products']);
    this._snackBar.openSnackBar(` New product ${postObj.pname} is added successfully!!!`)
  }
  updatedProduct(product:Iproducts){
    let getIndex = this.productsArr.findIndex(prod=> prod.pid === product.pid);
    this.productsArr[getIndex]=product;
    this._router.navigate(['products', product.pid],{
      queryParams :{ canReturn : product.canReturn}
    });
    this._snackBar.openSnackBar(` The product ${product.pname} is updated successfully!!!`)
  }
  removeProduct(id:string){
    let getIndex = this.productsArr.findIndex(prod => prod.pid === id);
    this.productsArr.splice(getIndex, 1)
    this._router.navigate(['products']);
    this._snackBar.openSnackBar(` The product is removed successfully!!!`)
  }
}
