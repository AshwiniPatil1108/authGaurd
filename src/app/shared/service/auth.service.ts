import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userLoginState : boolean =false;
  constructor(
    private _router : Router
  ) { }

  isAuthenticated():Promise<boolean>{
    return new Promise((resolve, reject)=>{
      setTimeout(()=>{
        if(localStorage.getItem('tokenValue')){
          this.userLoginState= true;
          
        }else{
          this.userLoginState= false;
          this._router.navigate(['/'])
        }
        resolve(this.userLoginState)
      }, 400)
    })
  }


//signUp

//login
onAppLogin(userCredential:{email: string, password: string}){
  if(userCredential.email === 'jhon@gmail.com' && userCredential.password === "jhon@11"){
    this.userLoginState = true;
    localStorage.setItem('tokenValue', 'JWT Token Take token from LS')
    localStorage.setItem('userRole', 'BUYER')
    this._router.navigate(['home'])
  }else if(userCredential.email ==='jen@gmail.com' && userCredential.password === "jen@11"){
    this.userLoginState = true;
    localStorage.setItem('tokenValue', 'JWT Token Take token from LS')
    localStorage.setItem('userRole', "ADMIN")
    this._router.navigate(['home'])
  }else if(userCredential.email ==='may@gmail.com' && userCredential.password === "may@111"){
    this.userLoginState = true;
    localStorage.setItem('tokenValue', 'JWT Token Take token from LS')
    localStorage.setItem('userRole', "SUPER_ADMIN")
    this._router.navigate(['home'])
  }else{
    alert(`Invalid Email or Password`)
  }
}

//logOut
logOutFromApp(){
  // LS remove token and userRole
  localStorage.removeItem('tokenValue')
  localStorage.removeItem('userRole')
  this._router.navigate(['/'])
}

}

