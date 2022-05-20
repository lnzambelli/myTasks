import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MyTaskService} from '../../services/my-task.service';
import {MatIconModule} from '@angular/material/icon';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-alert',
  template: `
        <mat-card *ngFor="let alerta of arrayAlertas" >
          <div class="flex flex-row ">
            <mat-icon>notifications_active</mat-icon>
            <h3 class="mx-8">{{alerta.titulo}}</h3>
          </div>
        </mat-card> 
  `,
  styles:[
    'mat-card {background-color: #E6B0AA; margin: 0px 8px; padding: 8px 16px 8px 16px; }', 
    'h3,mat-icon { color: #212F3C}',
    'h3 { margin-bottom:0}',
  ],
})
export class AlertComponent implements OnInit {

  arrayAlertas: Array<any> = [];
  fecha!: Date;
  fechaActual: any;
  auxMes: any;
  auxDia: any;

  constructor(private taskService: MyTaskService,
              private snackBar: MatSnackBar) {  
  }

  ngOnInit(){
    if (typeof this.fecha==="undefined"){
      this.obtenerFechaActual();
      this.cargarTareas(this.fechaActual);
    }
    this.obtenerFechaSel()
  }

  cargarTareas(fecha: any){
    let miFecha = fecha.split('-',3)
    this.arrayAlertas = JSON.parse(localStorage.getItem('misAlertas') || "");
    this.arrayAlertas = this.arrayAlertas.filter(data =>data.dia == miFecha[2] && data.mes == miFecha[1]
   ) 
  }

  obtenerFechaSel(){
    this.taskService.getFechaSeleccionada().subscribe(date =>{
        this.fecha = date
        this.cargarTareas(date);
    })
  }

  public obtenerFechaActual(){
    let date = new Date()
    let day = `${(date.getDate())}`.padStart(2,'0');
    let month = `${(date.getMonth()+1)}`.padStart(2,'0');
    let year = date.getFullYear();
    
    this.fechaActual =`${year}-${month}-${day}`;
  }

}

@NgModule({
  declarations: [AlertComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
  ],
  exports: [AlertComponent]
})
export class AlertModule { }
