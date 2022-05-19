import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateTaskRoutingModule } from './create-task-routing.module';
import { CreateTaskComponent } from './create-task.component';
import { FormTaskModule} from '../../components/form-task/form-task.component';
import {ToolbarModule} from '../../components/toolbar/toolbar.component';
import {FormMeetingModule} from '../../components/form-meeting/form-meeting.component';
import {MatTabsModule} from '@angular/material/tabs';
import { FooterModule} from '../../components/footer/footer.component'

@NgModule({
  declarations: [
    CreateTaskComponent
  ],
  imports: [
    CommonModule,
    CreateTaskRoutingModule,
    FormTaskModule,
    ToolbarModule,
    FormMeetingModule,
    MatTabsModule,
    FooterModule
  ]
})
export class CreateTaskModule { }
