import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeConductorComponent } from 'app/home-conductor/home-conductor.component';
const routes: Routes = [
    { path: '', component: HomeConductorComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class HomeConductorRoutingModule { }
