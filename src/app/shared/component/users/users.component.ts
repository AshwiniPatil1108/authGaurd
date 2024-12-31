import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Iusers } from '../../model/users';
import { UsersService } from '../../service/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  usersInfo !: Array<Iusers>
  selectedUsrId ! : string;
  constructor(
    private _router : Router,
    private _routes : ActivatedRoute,
      private _userService : UsersService
  ) { }

  ngOnInit(): void {
    this.usersInfo =this._userService.fetchAllUsers();
    this.selectedUsrId =this.usersInfo[0].userId
   this._router.navigate([this.usersInfo[0].userId],{
    relativeTo: this._routes
   })
   
  }
  onUserSelect(user : Iusers){
    console.log(user);
    this.selectedUsrId = user.userId
  
  }

}
