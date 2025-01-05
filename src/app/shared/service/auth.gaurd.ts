import { inject, Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";


@Injectable({
    providedIn:'root'
})
export class AuthGaurd implements CanActivate, CanActivateChild{
    private _authser = inject(AuthService)
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
    : Observable<boolean> | Promise<boolean>| boolean {
        return this._authser.isAuthenticated()
                                .then(res=>{
                                    return res
                                })
    }
    canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot)
    : Observable<boolean> | Promise<boolean > | boolean  {
        return this._authser.isAuthenticated()
                                .then(res=>{
                                    return res
                                })
    }
}