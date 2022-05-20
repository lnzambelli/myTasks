import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListRoutingModule } from './list-routing.module';
import { ListComponent } from './list.component';
import { ListViewModule } from 'src/app/components/list-view/list-view.component';
import { ToolbarModule } from 'src/app/components/toolbar/toolbar.component';
import { FooterModule} from '../../components/footer/footer.component'

@NgModule({
  declarations: [
    ListComponent
  ],
  imports: [
    CommonModule,
    ListRoutingModule,
    ListViewModule,
    ToolbarModule,
    FooterModule
  ]
})
export class ListModule { }
