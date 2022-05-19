import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';
import { MyTaskService } from 'src/app/services/my-task.service';
import {FirestoreService} from '../../services/firestore.service';
import {MatIconModule} from '@angular/material/icon';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-meeting',
  template: `
    <mat-card *ngFor="let reunion of arrReuniones" >
      <div class="flex flex-row justify-between">
        <mat-icon style="color: #3f51b5; font-size: 30px">groups</mat-icon>
        <h2> {{reunion.titulo}}</h2>
          <mat-chip-list >
            <mat-chip selected>{{reunion.hora}}</mat-chip>
          </mat-chip-list>
      </div>
      <div class="flex flex-row justify-between">
        <p>{{reunion.integrantes}}</p>
        <mat-icon (click)="eliminarReunion(reunion.id)">delete</mat-icon>
      </div>
    </mat-card>
    <mat-card *ngIf="arrReuniones.length==0" >
        <p>No tiene reuniones cargadas</p>
    </mat-card> 
  `,
})
export class MeetingComponent implements OnInit {

  arrReuniones: Array<any> = [];
  fecha!: Date;
  fechaActual: any;

  constructor(private firestore: FirestoreService,
              private taskService: MyTaskService,
              private snackBar: MatSnackBar) {  
  }

  ngOnInit(){
    if (typeof this.fecha==="undefined"){
      this.obtenerFechaActual();
      this.cargarReunion(this.fechaActual);  
    }
    this.obtenerFechaSel();
  }


  cargarReunion(fecha: Date){
    this.arrReuniones = JSON.parse(localStorage.getItem('misReuniones') || "");
    this.arrReuniones = this.arrReuniones.filter((data) => data.fecha === fecha) 
  }

  eliminarReunionesViejas(fecha: Date){
    let auxiliar = JSON.parse(localStorage.getItem('misReuniones') || "");
    this.arrReuniones = auxiliar.filter((data: { fecha: Date; }) => data.fecha < fecha)
    localStorage.setItem('misReuniones', JSON.stringify(this.arrReuniones))
  }

  obtenerFechaSel(){
    this.taskService.getFechaSeleccionada().subscribe(date =>{
          this.fecha = date
          this.cargarReunion(this.fecha);
    })
  }

  public obtenerFechaActual(){
    let date = new Date()
    let day = `${(date.getDate())}`.padStart(2,'0');
    let month = `${(date.getMonth()+1)}`.padStart(2,'0');
    let year = date.getFullYear();
    
    this.fechaActual =`${year}-${month}-${day}`;
  }

  eliminarReunion(id: string){
    this.snackBar.open('Eliminando Tareas..', 'Cerrar', {
      duration: 2000
    });
    let auxiliar = JSON.parse(localStorage.getItem('misReuniones') || "");
    this.arrReuniones = auxiliar.filter((data: { id: string; }) => data.id != id)
    localStorage.setItem('misReuniones', JSON.stringify(this.arrReuniones))
    this.cargarReunion(this.fechaActual);
  }
}

@NgModule({
  declarations: [
    MeetingComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatChipsModule,
    MatIconModule
  ],
  exports: [
    MeetingComponent
  ]
})
export class MeetingModule { }