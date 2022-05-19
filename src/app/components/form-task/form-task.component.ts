import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule, Validators, FormBuilder } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {Tareas} from '../task/tareas';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import { Router } from '@angular/router';
import {MyTaskService} from '../../services/my-task.service'
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-form-task',
  template: `
    <mat-card class="card-sb">
      <form novalidate [formGroup]="formGroup">
        <mat-form-field class="w-100 mb-8">
          <mat-label>Ingrese un titulo</mat-label>
          <input matInput formControlName="titulo" type="text">
          <mat-error *ngIf="formGroup.controls['titulo'].hasError('required')">
              El Titulo es <strong>requerido</strong>
            </mat-error>
        </mat-form-field>
        <mat-form-field class="w-100 mb-8">
          <mat-label>Ingrese una descripción</mat-label>
          <input matInput formControlName="descripcion" type="text">
          <mat-error *ngIf="formGroup.controls['descripcion'].hasError('required')">
              La descripcion es <strong>requerida</strong>
            </mat-error>
        </mat-form-field>
        <mat-form-field class="w-100 mb-8">
          <mat-label>Ingrese una fecha</mat-label>
          <input matInput formControlName="fecha" type="date" min={{this.fechaActual}}>
          <mat-error *ngIf="formGroup.controls['fecha'].hasError('required')">
              La fecha es <strong>requerida</strong>
            </mat-error>
        </mat-form-field>
        <div class="flex justify-center">
          <button mat-raised-button color="primary" [disabled]="!formGroup.valid || this.confirmado" (click)="guardarTarea()">Guardar</button>
        </div>
      </form>
    </mat-card> 
  `,
})
export class FormTaskComponent implements OnInit{

  public formGroup!: FormGroup;
  public confirmado!: boolean;
  public fechaActual: any;
  public listTareas: Tareas[] = [];

  constructor(private fb: FormBuilder, 
              private router: Router,
              private snackBar: MatSnackBar,
              private taskService: MyTaskService) {
  }

  crearForm(){
    this.formGroup = this.fb.group({
        titulo: ["", Validators.required],
        descripcion: ["", Validators.required],
        fecha: ["", Validators.required]
    })
  }

  ngOnInit(){
    this.confirmado=false;
    this.obtenerFechaActual();
    this.crearForm();
  }

  public obtenerFechaActual(){
    let date = new Date()
    let day = `${(date.getDate())}`.padStart(2,'0');
    let month = `${(date.getMonth()+1)}`.padStart(2,'0');
    let year = date.getFullYear();
    
    this.fechaActual =`${year}-${month}-${day}`;
  }

  guardarTarea(){
    if (this.formGroup.valid){
      this.crearTarea();
      this.confirmado=true;
      setTimeout(() => {
        this.router.navigate(['home'])
      }, 2000);
    } 
  }

  crearTarea(){

    let date = new Date()
    let idGenerator = date.getDay()+date.getMonth()+date.getFullYear()+date.getHours()+date.getMinutes()+date.getSeconds()
   
   const TAREA: Tareas = {
      id: idGenerator,
      titulo: this.formGroup.value.titulo,
      descripcion: this.formGroup.value.descripcion,
      fecha: this.formGroup.value.fecha,
    }

    localStorage.getItem('misTareas')=== null ? this.listTareas = [] : this.listTareas = JSON.parse(localStorage.getItem('misTareas') || "")
    this.listTareas.push(TAREA);
    localStorage.setItem('misTareas', JSON.stringify(this.listTareas))
    
    this.snackBar.open('Tarea Guardada!', 'Cerrar', {
      duration: 2000
    })
  }

}

@NgModule({
  declarations: [
    FormTaskComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule
  ],
  exports: [
    FormTaskComponent
  ]
})
export class FormTaskModule { }