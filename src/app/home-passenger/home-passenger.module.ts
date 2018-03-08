import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from 'app/home-passenger/home-passenger.routing';
import { SharedModule } from 'app/shared/shared.module';

// components
import { HomeComponent } from 'app/home-passenger/home-passenger.component';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ],
  declarations: [
    HomeComponent
  ]
})
export class HomePassengerModule { }
