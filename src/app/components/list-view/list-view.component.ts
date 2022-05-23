import { Alert } from './../alert/alert';
import { Tareas } from './../task/tareas';
import { Reunion } from './../meeting/reunion';
import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import { MatSnackBar } from '@angular/material/snack-bar';
import {MatChipsModule} from '@angular/material/chips';

@Component({
  selector: 'app-list-view',
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
      
      <mat-card *ngFor="let reunion of arrReuniones" >
      <div class="flex flex-row justify-between">
        <mat-icon style="font-size: 30px">groups</mat-icon>
        <h2> {{reunion.titulo}}</h2>
          <mat-chip-list >
            <mat-chip style="background-color: #E6B0AA; color: #212F3C" selected>{{reunion.hora}}</mat-chip>
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

    <mat-card *ngFor="let alerta of arrayAlertas">
        <div class="flex flex-row justify-between">
          <mat-icon>notifications_active</mat-icon>
            <h2 class="mx-8">{{alerta.titulo}}</h2>
          <mat-icon (click)="eliminarAlerta(alerta.id)" >clear</mat-icon>
        </div>
    </mat-card>
    <mat-card *ngIf="arrayAlertas.length==0" >
        <p>No tiene alertas cargadas</p>
    </mat-card>  
  `,
  styles:[
    'mat-card {background-color: #212F3C; margin: 8px;}',
    'p,h2,mat-icon, mat-chip { color: #D4E6F1  }',
  ],
})
export class ListViewComponent implements OnInit {
  
  arrayTareas: Tareas[] = [];
  arrReuniones: Reunion[] = [];
  arrayAlertas: Alert[] = [];

  constructor(private snackBar: MatSnackBar) { }

  ngOnInit(){
    this.cargarDatos()
  }

  cargarDatos(){
   
    this.arrayTareas = JSON.parse(localStorage.getItem('misTareas') || "") ;
    this.arrReuniones = JSON.parse(localStorage.getItem('misReuniones') || "");
    this.arrayAlertas = JSON.parse(localStorage.getItem('misAlertas') || "");
  }

  eliminarTarea(id: number){
    this.snackBar.open('Eliminando Tareas..', 'Cerrar', {
      duration: 2000
    });
    let auxiliar = JSON.parse(localStorage.getItem('misTareas') || "");
    this.arrayTareas = auxiliar.filter((data: { id: number; }) => data.id != id)
    localStorage.setItem('misTareas', JSON.stringify(this.arrayTareas))
    this.cargarDatos()
  }

  eliminarReunion(id: number){
    this.snackBar.open('Eliminando Reunion..', 'Cerrar', {
      duration: 2000
    });
    let auxiliar = JSON.parse(localStorage.getItem('misReuniones') || "");
    this.arrReuniones = auxiliar.filter((data: { id: number; }) => data.id != id)
    localStorage.setItem('misReuniones', JSON.stringify(this.arrReuniones))
    this.cargarDatos()
  }

  eliminarAlerta(id: number){
    this.snackBar.open('Eliminando Alerta..', 'Cerrar', {
      duration: 2000
    });
    let auxiliar = JSON.parse(localStorage.getItem('misAlertas') || "");
    this.arrayAlertas = auxiliar.filter((data: { id: number; }) => data.id != id)
    localStorage.setItem('misAlertas', JSON.stringify(this.arrayAlertas))
    this.cargarDatos()
  }
 
}

@NgModule({
  declarations: [ListViewComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatChipsModule
  ],
  exports: [ListViewComponent]
})
export class ListViewModule { }
