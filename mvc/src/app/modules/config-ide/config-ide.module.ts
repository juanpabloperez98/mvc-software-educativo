import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home/home.component';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { RouterModule } from '@angular/router';
import { configIDERoutes } from './config-ide-routing.module';
import { Ejemplo1Component } from './home/components/ejemplo1/ejemplo1.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HomeComponent,
    Ejemplo1Component
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    RouterModule.forChild(configIDERoutes),
  ]
})
export class ConfigIdeModule { }
