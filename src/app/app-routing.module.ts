import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AboutComponent} from "./components/about/about.component";
import {MainComponent} from "./components/main/main.component";
import {CatalogComponent} from "./components/catalog/catalog.component";
import {CartComponent} from "./components/cart/cart.component";
import {SignupComponent} from "./components/signup/signup.component";
import {LoginComponent} from "./components/login/login.component";

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
  },
  {
    path:'about',
    component: AboutComponent
  },
  {
    path:'catalog',
    component:CatalogComponent
  },
  {
    path:'cart',
    component:CartComponent
  },
  {
    path:'signup',
    component:SignupComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
