import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Ejemplo1Component } from './home/components/ejemplos/ejemplo1/ejemplo1.component';
import { Ejercicio1Component } from './home/components/ejercicios/ejercicio1/ejercicio1.component';
export const introductionRoutes: Routes =[
  {
    path:'main', component: HomeComponent,
  },
  {
    path:'ejemplo1', component: Ejemplo1Component,
  },
  {
    path:'ejercicio1', component: Ejercicio1Component,
  },
];
