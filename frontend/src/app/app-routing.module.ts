import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from'./views/home/home.component'
import { ProductCrudComponent } from'./views/product-crud/product-crud.component'
import { ProductCreateComponent } from './components/product/product-create/product-create.component';
import { LoginComponent } from './views/login/login.component';
import { CreatAccountComponent } from './views/creat-account/creat-account.component';
import { AuthGuard } from './account/shared/auth.guard';

const routes: Routes = [{
  path:"home",
  component: HomeComponent,
  canActivate: [AuthGuard]
},{
  path:"products",
  component: ProductCrudComponent,
  canActivate: [AuthGuard]
},{
  path:"products/create",
  component: ProductCreateComponent,
  canActivate: [AuthGuard]
},{
  path: "creatAccount",
  component: CreatAccountComponent
},
{
  path: "",
  component: LoginComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
