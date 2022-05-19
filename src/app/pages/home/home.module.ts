import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ToolbarModule} from '../../components/toolbar/toolbar.component'
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import {DateModule} from '../../components/date/date.component';
import {TaskModule} from '../../components/task/task.component';
import {MeetingModule} from '../../components/meeting/meeting.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { FooterModule} from '../../components/footer/footer.component'

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ToolbarModule,
    DateModule,
    TaskModule,
    MeetingModule,
    MatProgressSpinnerModule,
    FooterModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
