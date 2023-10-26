import { NgModule } from '@angular/core';
import {ExtraOptions, RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {InfoComponent} from "./info/info.component";
import {ContactComponent} from "./contact/contact.component";


const APP_ROUTES: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' }, // Redirect from root to 'home'
  { path: 'home', component: HomeComponent },
  { path: 'info', component: InfoComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'sing-up', component: ContactComponent },
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
