import { Component, OnInit } from '@angular/core';
import { User } from 'app/core/models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  user: User = new User();
  isBtnDisabled = true;

  constructor(private router: Router) { }

  ngOnInit() {

  }

  register() {
    if (this.user.password === this.user.confirmPassword) {
      console.log('register', this.user);
      this.router.navigateByUrl('/login');
    }
  }

}
