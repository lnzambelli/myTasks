import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateTaskRoutingModule } from './create-task-routing.module';
import { CreateTaskComponent } from './create-task.component';
import { FormTaskModule } from '../../components/form-task/form-task.component';
import { FormMeetingModule } from '../../components/form-meeting/form-meeting.component';
import { MatTabsModule } from '@angular/material/tabs';
import { FormAlertModule } from 'src/app/components/form-alert/form-alert.component';

@NgModule({
  declarations: [
    CreateTaskComponent
  ],
  imports: [
    CommonModule,
    CreateTaskRoutingModule,
    FormTaskModule,
    FormMeetingModule,
    MatTabsModule,
    FormAlertModule
  ]
})
export class CreateTaskModule { }
