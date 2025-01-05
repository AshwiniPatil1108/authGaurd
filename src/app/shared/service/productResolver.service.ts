import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Iproducts } from "../model/products";
import { Injectable } from "@angular/core";
import { ProductsService } from "./products.service";

@Injectable({
    providedIn:'root'
})
export class ProductResolverService implements Resolve<Iproducts[]>{
    constructor(
        private _prodSer: ProductsService
    ){
        
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return  this._prodSer.fetchAllProducts()
    }
}