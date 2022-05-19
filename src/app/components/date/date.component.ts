import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule, OnInit } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MyTaskService} from '../../services/my-task.service';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-date',
  template: `
    <mat-card class="card-sb">
          <mat-form-field class="w-100"> 
            <mat-label>Seleccionar Fecha</mat-label>
            <input matInput type="date" min={{this.fechaActual}} #valor value={{fechaActual}} (change)="obtenerFechaSel(valor.value)">
          </mat-form-field> 
    </mat-card>
  `,
   styles:[
    'input{  }'
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DateComponent implements OnInit {

  public fechaActual: any;
  
  constructor(private taskService: MyTaskService) { }

  ngOnInit(){
    this.fechaActual = new Date()
    this.obtenerFechaActual();
  }

  public obtenerFechaActual(){
    let date = new Date()
    let day = `${(date.getDate())}`.padStart(2,'0');
    let month = `${(date.getMonth()+1)}`.padStart(2,'0');
    let year = date.getFullYear();
    
    this.fechaActual =`${year}-${month}-${day}`;

    this.taskService.agregarFecha(this.fechaActual);
  }
  public obtenerFechaSel(valor: any){
      this.taskService.agregarFecha(valor);
  }

}


@NgModule({
  declarations: [
    DateComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
  ],
  exports: [
    DateComponent
  ]
})
export class DateModule { }
