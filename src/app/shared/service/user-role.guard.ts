import { inject, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserRoleGuard implements CanActivate {
  private _router = inject(Router)
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let loggedInUserRole = localStorage.getItem('userRole')as string
    let userRoleArr:Array<string>= route.data['userRoles']
    // console.log(loggedInUserRole, route.data['userRole']);
    if(userRoleArr.includes(loggedInUserRole)){
      return true;
    }else{
      const urlTree : UrlTree = this._router.createUrlTree(['home'])
      return urlTree;
    }
  }
  
}
