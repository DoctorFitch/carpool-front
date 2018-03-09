import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { AuthentificationCheckService } from 'app/core/services/authentification/authentification-check.service';
import { NotifyService } from '.';
import { NavbarComponent } from './navbar/navbar.component';
import { NavigationService } from 'app/core/navigation/navigation.service';
import { UserService } from './services/user/user.service';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ],
  declarations: [
    NavbarComponent
  ],
  exports: [
    RouterModule,
    NavbarComponent
  ],
  providers: [
    AuthentificationCheckService,
    NotifyService,
    NavigationService,
    UserService
  ]
})

export class CoreModule { }
