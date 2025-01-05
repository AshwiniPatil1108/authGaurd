import { inject, Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Iproducts } from '../model/products';
import { ProductsService } from './products.service';

@Injectable({
  providedIn: 'root'
})
export class ProductResolverResolver implements Resolve<Iproducts> {
  private _prodSer = inject(ProductsService)
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Iproducts {
   //id of the product
   console.log(route['params'])
   let productId : string = route.params["productId"]
  //get id from params>> ActivatedRoute Instance

  //api call using product service
  let obj = this._prodSer.fetchProduct(productId)
  console.log(obj)
  return obj
  }
}
