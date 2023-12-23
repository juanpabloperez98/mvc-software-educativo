import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { dataBasesRoutes } from './databases-routing.module';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(dataBasesRoutes),
  ]
})
export class DatabasesModule { }
