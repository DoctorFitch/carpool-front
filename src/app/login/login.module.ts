import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from 'app/login/login.routing';
import { SharedModule } from 'app/shared/shared.module';

// components
import { LoginComponent } from 'app/login/login.component';

@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    LoginRoutingModule
  ],
  declarations: [
    LoginComponent
  ]
})
export class LoginModule { }
