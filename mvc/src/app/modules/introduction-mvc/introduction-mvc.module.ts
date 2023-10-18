import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { introductionRoutes } from './introduction-routing.module';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { Ejemplo1Component } from './home/components/ejemplos/ejemplo1/ejemplo1.component';

@NgModule({
  declarations: [
    HomeComponent,
    Ejemplo1Component,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(introductionRoutes),
    SharedModule,
  ],
})
export class IntroductionMVCModule { }
