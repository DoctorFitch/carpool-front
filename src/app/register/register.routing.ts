import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from 'app/register/register.component';
// ? keeped this exemple to see how the guard was used
// import { AuthGuardService } from '../core';

const routes: Routes = [
    { path: '', component: RegisterComponent }
    // ? keeped this exemple to see how the guard was used
    // { path: 'carbone/:id', component: DashboardCampaignCarboneComponent, canActivate: [AuthGuardService] }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class RegisterRoutingModule { }
