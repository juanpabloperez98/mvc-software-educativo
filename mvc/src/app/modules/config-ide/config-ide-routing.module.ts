import { Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { Ejemplo1Component } from './home/components/ejemplo1/ejemplo1.component';

export const configIDERoutes: Routes =[
  {
    path:'main', component: HomeComponent,
  },
  {
    path:'ejemplo1', component: Ejemplo1Component,
  },
];
