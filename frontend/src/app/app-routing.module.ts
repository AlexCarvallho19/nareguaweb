import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';

import { HomeComponent } from'./views/home/home.component'
import { ProductCrudComponent } from'./views/product-crud/product-crud.component'
import { ProductCreateComponent } from './components/product/product-create/product-create.component';
import { CalendarComponent } from './components/product/calendar/calendar.component';
import { LoginComponent } from './views/login/login.component';
import { CreatAccountComponent } from './views/creat-account/creat-account.component';
import { AuthGuard } from './account/shared/auth.guard';
import { AuthAdminGuard } from './account-admin/shared/auth-admin.guard';
import { LoginAdimComponent } from './views/login-adim/login-adim.component';
import { MenuBarberComponent } from './views/menu-barber/menu-barber.component';
import { UserQueryComponent } from './views/user-query/user-query.component';
import { UpdatePasswordAdminComponent } from './views/update-password-admin/update-password-admin.component'; 
import { DeleteUserComponent } from './views/delete-user/delete-user.component'


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
  component: ProductCreateComponent
},{
  path:"products/calendar",
  component: CalendarComponent,
  canActivate: [AuthGuard]
},{
  path: "creatAccount",
  component: CreatAccountComponent
},{
  path: "loginAdimComponent",
  component: LoginAdimComponent
},{
  path: "baberMenu",
  component: MenuBarberComponent,
  canActivate: [AuthAdminGuard]
},{
  path: "userQuery",
  component: UserQueryComponent
},{
  path: 'updatePassword',
  component: UpdatePasswordAdminComponent 
},
{
  path: "deleteUser/:id",
  component: DeleteUserComponent
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
