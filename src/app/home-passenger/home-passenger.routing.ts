import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePassengerComponent } from 'app/home-passenger/home-passenger.component';
const routes: Routes = [
    { path: '', component: HomePassengerComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class HomePassengerRoutingModule { }
