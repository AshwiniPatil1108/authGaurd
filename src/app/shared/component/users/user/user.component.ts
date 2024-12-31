import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Iusers } from 'src/app/shared/model/users';
import { UsersService } from 'src/app/shared/service/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  userId !:string;
  userInfo ! : Iusers;
  
  constructor(
    private _routes : ActivatedRoute,
    private _usersService :UsersService,
    private _router :Router,
   
  ) { }

  ngOnInit(): void {

    this._routes.params
                  .subscribe((params : Params)=>{
                    // console.log(params)
                    this.userId= params['userId'];
                    this.userInfo = this._usersService.fetchUsers(this.userId)
                  })
   
  }

  onRemoveUser(){
    this._usersService.removeUser(this.userId)
  }
  gotoEditUser(){
    this._router.navigate(['edit'],{
      relativeTo: this._routes,
      queryParamsHandling: `preserve`
    })
  }

}
