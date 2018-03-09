import { Component, OnInit } from '@angular/core';
import { UserService } from 'app/core/services/user/user.service';
import { User } from 'app/core/models/user.model';
// ? lodash
import * as _ from 'lodash';

// jquery
declare var $: any;

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  users: User[];
  user: User;

  constructor(private userSvc: UserService) { }

  ngOnInit() {
    this.getDatas();
  }

  activeCollapside() {
    $('.collapsible').collapsible();
  }

  getDatas() {
    this.userSvc.getById(1).subscribe(_user => {
      this.user = _user;
    });

    this.userSvc.getAll().subscribe(_users => {
      this.users = _.take(_users, 5);;
    })
  }

  updateProfil() {
    this.userSvc.update(this.user).subscribe(result => {
      console.log('result updateProfil()', result);
    })
  }

  deleteAccount() {
    this.userSvc.delete(this.user.id).subscribe();
  }

}
