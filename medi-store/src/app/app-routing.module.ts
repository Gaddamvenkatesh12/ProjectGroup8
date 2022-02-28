import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MedicinesComponent } from './admin/medicines/medicines.component';
import { ShopmedicineComponent } from './shopmedicine/shopmedicine.component';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { CartComponent } from './cart/cart.component';
import { MedistoreComponent } from './medistore/medistore.component';
import { AuthGuard } from './login/auth.guard';
import { AthGuard } from './login/ath.guard';



const routes: Routes = [
  { path: 'admin/medicines', component: MedicinesComponent,canActivate:[AthGuard]},
  { path: 'shop', component: ShopmedicineComponent,canActivate:[AuthGuard] },
  { path: 'menu', component : MenuComponent,canActivate:[AuthGuard]},
  { path:'about',component:AboutusComponent,canActivate:[AuthGuard]},
  { path:'contact',component:ContactusComponent,canActivate:[AuthGuard]},
  { path:'login',component:LoginComponent},
  { path:'signup',component:SignupComponent},
  { path: 'cart',component:CartComponent,canActivate:[AuthGuard]},
  { path: '',component:MedistoreComponent}
];
  
  
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
