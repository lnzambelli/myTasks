import { CommonModule } from '@angular/common';
import {Component, NgModule, OnInit} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MyTaskService} from '../../services/my-task.service';
import {MatIconModule} from '@angular/material/icon';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-task',
  template: `
        <mat-card *ngFor="let tarea of arrayTareas" >
          <div class="flex flex-row justify-between">
            <mat-icon>task</mat-icon>
            <h2>{{tarea.titulo}}</h2>
            <mat-icon (click)="eliminarTarea(tarea.id)">clear</mat-icon>
          </div>
          <p>{{tarea.descripcion}}</p>
        </mat-card>
        <mat-card *ngIf="arrayTareas.length==0">
        <p>No tiene tareas cargadas</p>
    </mat-card>   
  `,
  styles:[
    'mat-card {background-color: #212F3C; margin: 8px;}',
    'p,h2,mat-icon { color: #D4E6F1  }'
  ],
})
export class TaskComponent implements OnInit{

  arrayTareas: Array<any> = [];
  fecha!: Date;
  fechaActual: any;

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

  cargarTareas(fecha: Date){
    this.arrayTareas = JSON.parse(localStorage.getItem('misTareas') || "");
    this.arrayTareas = this.arrayTareas.filter((data) => data.fecha === fecha) 
  }

  eliminarTareasViejas(fecha: Date){
    let auxiliar = JSON.parse(localStorage.getItem('misTareas') || "");
    this.arrayTareas = auxiliar.filter((data: { fecha: Date; }) => data.fecha < fecha)
    localStorage.setItem('misTareas', JSON.stringify(this.arrayTareas))
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

  eliminarTarea(id: string){
    this.snackBar.open('Eliminando Tareas..', 'Cerrar', {
      duration: 2000
    });
    let auxiliar = JSON.parse(localStorage.getItem('misTareas') || "");
    this.arrayTareas = auxiliar.filter((data: { id: string; }) => data.id != id)
    localStorage.setItem('misTareas', JSON.stringify(this.arrayTareas))
    this.cargarTareas(this.fechaActual);
  }
}


@NgModule({
  declarations: [
    TaskComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    
  ],
  exports: [
    TaskComponent
  ]
})
export class TaskModule { }

