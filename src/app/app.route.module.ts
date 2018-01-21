import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateUserComponent } from './users/app.createuser.component';
import { AppListViewComponent } from './list/app-list.component';

export const appRoutes: Routes = [
  { path: 'create-user', component: CreateUserComponent },
  { path: 'home',        component: AppListViewComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {


 }