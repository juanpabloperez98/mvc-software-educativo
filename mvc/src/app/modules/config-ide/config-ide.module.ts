import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home/home.component';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { RouterModule } from '@angular/router';
import { configIDERoutes } from './config-ide-routing.module';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(configIDERoutes),
  ]
})
export class ConfigIdeModule { }
