import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule, AdminRoutingComponents } from './admin-routing.module';
import { NgCircleProgressModule } from 'ng-circle-progress';
// import {NgbModule, NgbAlertModule, NgbAccordionModule, NgbModalModule, NgbProgressbarModule} from '@ng-bootstrap/ng-bootstrap';
import {ProgressBarModule} from "angular-progress-bar"
import {MatDialogModule} from '@angular/material/dialog';
import { DialogOverviewExampleDialog } from './interceptor/interceptor.component';

@NgModule({
  declarations: [AdminRoutingComponents, DialogOverviewExampleDialog],
  imports: [
    CommonModule,
    AdminRoutingModule,
    NgCircleProgressModule,
    MatDialogModule,
    // NgbModule,
    // NgbAlertModule,
    // NgbAccordionModule,
    // NgbModalModule,
    // NgbProgressbarModule,
    ProgressBarModule
  ],
  entryComponents: [DialogOverviewExampleDialog]
})
export class AdminModule { }
