import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserProfileComponent } from './user-profile.component';
// ? keeped this exemple to see how the guard was used
// import { AuthGuardService } from '../core';

const routes: Routes = [
    { path: '', component: UserProfileComponent }
    // ? keeped this exemple to see how the guard was used
    // { path: 'carbone/:id', component: DashboardCampaignCarboneComponent, canActivate: [AuthGuardService] }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class UserProfileRouting { }
