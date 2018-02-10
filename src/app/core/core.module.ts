import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { AuthentificationCheckService } from 'app/core/authentification/authentification-check.service';
import { NotifyService } from '.';
import { NavbarComponent } from './navbar/navbar.component';
import { NavigationService } from 'app/core/navigation/navigation.service';

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
    NavigationService
  ]
})

export class CoreModule { }
