import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { SnackBarService } from './snack-bar.service';
import { Iusers } from '../model/users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  usersArr:Array<Iusers>=[
    {
      userName: "Jhon Doe",
      userId:"123",
      userRole:"Candidate"
    },
    {
      userName: "Jen Doe",
      userId:"124",
      userRole:"Candidate"
    },
    {
      userName: "May Doe",
      userId:"125",
      userRole:"Admin"
    }
   ]
  constructor(
    private _router : Router,
    private _snackBarService : SnackBarService
  ) { }
  fetchAllUsers(){
    //API call to fetch all users Data
    return this.usersArr
  }

  fetchUsers(id:string): Iusers{
    //api call to fetch user data
    return this.usersArr.find(user => user.userId === id)!
  }

  postUser(user:Iusers){
    //api calll to add new user
    this.usersArr.push(user);
    this._router.navigate(['/users'])
    this._snackBarService.openSnackBar(`New user ${user.userName} added successfuly !!!`)
  }

  updateUser(updatedUser: Iusers){
    //api call to update user
    let getIndex = this.usersArr.findIndex(user => user.userId === updatedUser.userId);

    this.usersArr[getIndex]=updatedUser;
    this._router.navigate(['/users', updatedUser.userId],{
      queryParams :{userRole : updatedUser.userRole}
    });
    this._snackBarService.openSnackBar(`The user ${updatedUser.userName} updated successfuly !!!`)
  }

  removeUser(id: string){
    //api call to remove user from DB
    let getIndex = this.usersArr.findIndex(user=> user.userId === id);
    let obj =this.usersArr.splice(getIndex, 1);
    this._router.navigate(['/users']);
    this._snackBarService.openSnackBar(`The user is removed successfuly !!!`)
  }
}
