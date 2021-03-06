/*
=====================================
  ; Title: app-routing.modules.ts
  ; Author: William Thomason
  ; Date: July 24 2019
  ; Modified By: William Thomason
  ; Description: app-routing.modules.ts
======================================
*/

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { E404Component } from './e404/e404.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'user/:id', component: UserComponent},
  {path: '**', component: E404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
