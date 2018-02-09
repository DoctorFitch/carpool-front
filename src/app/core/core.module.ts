import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { AuthentificationCheckService } from 'app/core/authentification/authentification-check.service';
import { NotifyService } from '.';
import { NavbarComponent } from './navbar/navbar.component';

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
    NotifyService
  ]
})

export class CoreModule { }
