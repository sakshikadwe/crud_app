import { NgModule, createComponent } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { authGuard } from './auth.guard';
import { CanConfirmGuard } from './can-confirm.guard';



const routes: Routes = [
  {path: '', redirectTo:'/home', pathMatch:'full'},
  {path:'login', component : LoginComponent},
  {path:'sign-up', component : SignUpComponent},
  {path: 'home', component : HomeComponent},
  {path : 'product', component : ProductComponent, canActivate: [authGuard], children :[
    {path : 'create-product', component : CreateProductComponent, canDeactivate: [CanConfirmGuard]},
    {path :'product-list', component : ProductListComponent},
    {path :'edit-product/:id', component : CreateProductComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

  
  }
 
