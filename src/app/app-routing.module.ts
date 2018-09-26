import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router'
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { HomeLayoutComponent } from './home-layout/home-layout.component';
import { AboutLayoutComponent } from './about-layout/about-layout.component';

const appRoutes: Routes = [
  {
    path: '', component: HomeLayoutComponent,
    children:[
      { path:'',component:HomeComponent}
    ]   
  },
  {
    path: '',component: AboutLayoutComponent,
    children:[
      { path:'about',component:AboutComponent},
    ]
  },
];

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes),
  ],
  declarations: []
})
export class AppRoutingModule { }
