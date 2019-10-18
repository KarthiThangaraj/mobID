import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule, AdminRoutingComponents } from './admin-routing.module';
import { NgCircleProgressModule } from 'ng-circle-progress';
// import {NgbModule, NgbAlertModule, NgbAccordionModule, NgbModalModule, NgbProgressbarModule} from '@ng-bootstrap/ng-bootstrap';
import {ProgressBarModule} from "angular-progress-bar"

@NgModule({
  declarations: [AdminRoutingComponents],
  imports: [
    CommonModule,
    AdminRoutingModule,
    NgCircleProgressModule,
    // NgbModule,
    // NgbAlertModule,
    // NgbAccordionModule,
    // NgbModalModule,
    // NgbProgressbarModule,
    ProgressBarModule
  ]
})
export class AdminModule { }
