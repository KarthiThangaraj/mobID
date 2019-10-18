import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule, AdminRoutingComponents } from './admin-routing.module';
import { NgCircleProgressModule } from 'ng-circle-progress';


@NgModule({
  declarations: [AdminRoutingComponents],
  imports: [
    CommonModule,
    AdminRoutingModule,
    NgCircleProgressModule
  ]
})
export class AdminModule { }
