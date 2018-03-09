import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'app/shared/shared.module';
import { UserProfileRouting } from 'app/shared/user-profile/user-profile.routing';

// component
import { UserProfileComponent } from 'app/shared/user-profile/user-profile.component';

@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    UserProfileRouting
  ],
  declarations: [
    UserProfileComponent
  ]
})
export class UserProfileModule { }
