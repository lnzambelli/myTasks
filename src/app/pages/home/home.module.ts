import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import {DateModule} from '../../components/date/date.component';
import {TaskModule} from '../../components/task/task.component';
import {MeetingModule} from '../../components/meeting/meeting.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { AlertModule } from 'src/app/components/alert/alert.component';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    DateModule,
    TaskModule,
    MeetingModule,
    MatProgressSpinnerModule,
    AlertModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
