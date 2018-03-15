import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'app/shared/shared.module';
import { HomeConductorRoutingModule } from 'app/home-conductor/home-conductor.routing';

// components
import { HomeConductorComponent } from 'app/home-conductor/home-conductor.component';

@NgModule({
  imports: [
    CommonModule,
    HomeConductorRoutingModule,
    SharedModule
  ],
  declarations: [
    HomeConductorComponent
  ]
})
export class HomeConductorModule { }
