import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Iproducts } from 'src/app/shared/model/products';
import { ProductsService } from 'src/app/shared/service/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  productId ! : string
  productObj!:Iproducts
  constructor(
    private _routes: ActivatedRoute,
    private _productService : ProductsService
  ) { }

  ngOnInit(): void {
  
    this._routes.params
              .subscribe((params: Params)=>{
                console.log(params);
                this.productId =params['productId']
                if(this.productId){
                  this.productObj = this._productService.fetchProduct(this.productId)//go to html to bind obj
                }
              })
   
  }

  onProductRemove(){
    let getConfirm= confirm(`Are you sure ?`)
    if(getConfirm){
      this._productService.removeProduct(this.productId)}
  }



}
