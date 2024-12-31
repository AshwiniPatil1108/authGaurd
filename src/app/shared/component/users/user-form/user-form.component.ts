import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { Iusers } from 'src/app/shared/model/users';
import { UsersService } from 'src/app/shared/service/users.service';
import { UuidService } from 'src/app/shared/service/uuid.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
  userId ! : string;
  userInfo ! : Iusers;
  userForm ! : FormGroup;
  isInEditMode :boolean = false;
  updateBtnFlag : Boolean =false;
 constructor(
   private _routes: ActivatedRoute,
   private _userService: UsersService,
   private _uuidService : UuidService
 ) { }

 ngOnInit(): void {

   this.userForm = new FormGroup({
     userName : new FormControl(null, [Validators.required]),
     userRole: new FormControl('Candidate', [Validators.required]),
   })

   this.userId = this._routes.snapshot.params['userId'];
   if(this.userId){
     this.isInEditMode=true
     this.userInfo =this._userService.fetchUsers(this.userId);
     this.userForm.patchValue(this.userInfo);
   }

   this._routes.queryParams
   .subscribe((params : Params)=>{
     console.log(params);

     if(params['userRole'].toLowerCase().includes('candidate')){
       this.userForm.disable();
       this.updateBtnFlag = true;
     }
   })
 }
 onUserAdd(){
   if(this.userForm.valid){
     console.log(this.userForm.value);
     let userObj: Iusers ={
       ...this.userForm.value,
       userId: this._uuidService.generateUuid()

     }
     this.userForm.reset()
     // console.log(userObj);
     this._userService.postUser(userObj)
     
   }
 }

 onUserUpdate(){
   let updatedObj : Iusers= {...this.userForm.value, userId : this.userId}
   console.log(updatedObj);
   this.userForm.reset();
   this._userService.updateUser(updatedObj)
 }



}
