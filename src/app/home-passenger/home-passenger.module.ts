import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePassengerRoutingModule } from 'app/home-passenger/home-passenger.routing';
import { SharedModule } from 'app/shared/shared.module';

// components
import { HomePassengerComponent } from 'app/home-passenger/home-passenger.component';

@NgModule({
  imports: [
    CommonModule,
    HomePassengerRoutingModule,
    SharedModule
  ],
  declarations: [
    HomePassengerComponent
  ]
})
export class HomePassengerModule { }
