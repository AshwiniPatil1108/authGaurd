import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  loginForm!: FormGroup;
  signUpForm!: FormGroup;
  allReadyHasAccount: boolean = true;
    constructor(
      private _authser : AuthService
    ) { }
  
    ngOnInit(): void {
      this.creatSignUpForm();
    this.creatLoginForm()
    }
    creatLoginForm(){
      this.loginForm = new  FormGroup({
        email : new FormControl(null, [Validators.required]),
        password : new FormControl(null, [Validators.required]),
      })
    }
  
    creatSignUpForm(){
      this.signUpForm = new  FormGroup({
        email : new FormControl(null, [Validators.required]),
        password : new FormControl(null, [Validators.required]),
        confirmPassword : new FormControl(null, [Validators.required]),
      })
    }
    onLogin(){
      if(this.loginForm.valid){
        let obj :{email: string, password: string} = this.loginForm.value;
        console.log(obj);
        this._authser.onAppLogin(obj)
  
      }
    }
    onSignup(){
  
    }
  


}
