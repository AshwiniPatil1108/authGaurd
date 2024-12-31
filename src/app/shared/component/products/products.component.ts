import { Component, OnInit } from '@angular/core';
import { Iproducts } from '../../model/products';
import { ProductsService } from '../../service/products.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products ! : Array<Iproducts> //4
  selectedProdId !: string
  
  constructor(
    private _productService : ProductsService,//5 
    private _route : ActivatedRoute,
    private _router : Router
  ) { }

  ngOnInit(): void {
    this.products = this._productService.fetchAllProducts()//6 go to hml to check
    this.selectedProdId = this.products[0].pid;
    this._router.navigate([this.products[0].pid],{
      relativeTo: this._route,
      queryParams :{canReturn :this.products[0].canReturn}
    })
    
  }

  onProductClick(product : Iproducts){
   
    this.selectedProdId=  product.pid;
  }

}
