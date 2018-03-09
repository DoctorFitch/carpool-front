import { Component, OnInit } from '@angular/core';
import { UserService } from 'app/core/services/user/user.service';
import { User } from 'app/core/models/user.model';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  user: User;

  constructor(private userSvc: UserService) { }

  ngOnInit() {
    this.userSvc.getById(1).subscribe(_user => {
      this.user = _user;
    })
  }

}
