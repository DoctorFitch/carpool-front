import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterRoutingModule } from 'app/register/register.routing';
import { SharedModule } from 'app/shared/shared.module';

// components
import { RegisterComponent } from 'app/register/register.component';

@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    RegisterRoutingModule
  ],
  declarations: [
    RegisterComponent
  ]
})
export class RegisterModule { }
