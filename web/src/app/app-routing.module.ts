import { NgModule } from '@angular/core';
import {ExtraOptions, RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";


const APP_ROUTES: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' }, // Redirect from root to 'home'
  { path: 'home', component: HomeComponent },
];

export const routingConfiguration: ExtraOptions = {
  paramsInheritanceStrategy: 'always',
  enableTracing: true
};

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES, routingConfiguration)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
