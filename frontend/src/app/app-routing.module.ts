import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from'./views/home/home.component'
import { ProductCrudComponent } from'./views/product-crud/product-crud.component'
import { ProductCreateComponent } from './components/product/product-create/product-create.component';
<<<<<<< HEAD
import { CalendarComponent } from './components/product/calendar/calendar.component';
=======
import { LoginComponent } from './views/login/login.component';
import { CreatAccountComponent } from './views/creat-account/creat-account.component';
import { AuthGuard } from './account/shared/auth.guard';
>>>>>>> f639e8005e32bad5eff826c493926b70aaff53bd

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
<<<<<<< HEAD
  component: ProductCreateComponent
},{
  path:"products/calendar",
  component: CalendarComponent
=======
  component: ProductCreateComponent,
  canActivate: [AuthGuard]
},{
  path: "creatAccount",
  component: CreatAccountComponent
},
{
  path: "",
  component: LoginComponent
>>>>>>> f639e8005e32bad5eff826c493926b70aaff53bd
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
