import { Component, OnInit } from '@angular/core';
import { User } from 'app/core/models/user.model';
import { Router } from '@angular/router';
import { UserService } from '../core/services/user/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  user: User = new User();
  confirmPassword: string;
  isBtnDisabled = true;

  constructor(private router: Router, private userSvc: UserService) { }

  ngOnInit() {

  }

  register() {
    this.userSvc.create(this.user).subscribe((user) => {
      console.log('user created', user);
    })
  }

}
