import { Reunion } from './../meeting/reunion';
import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import { Router } from '@angular/router';
import { FirestoreService } from 'src/app/services/firestore.service';
import {MyTaskService} from '../../services/my-task.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-form-meeting',
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
          <mat-label>Ingrese detalles (lugar, integrantes, etc)</mat-label>
          <input matInput formControlName="integrantes" type="text">
          <mat-error *ngIf="formGroup.controls['integrantes'].hasError('required')">
              Los detalles son <strong>requeridos</strong>
            </mat-error>
        </mat-form-field>
        <mat-form-field class="w-100 mb-8">
          <mat-label>Ingrese una fecha</mat-label>
          <input matInput formControlName="fecha" type="date" min={{this.fechaActual}}>
          <mat-error *ngIf="formGroup.controls['fecha'].hasError('required')">
              La fecha es <strong>requerida</strong>
            </mat-error>
        </mat-form-field>
        <mat-form-field class="w-100 mb-8">
          <mat-label>Ingrese una hora</mat-label>
          <input matInput formControlName="hora" type="time">
          <mat-error *ngIf="formGroup.controls['hora'].hasError('required')">
              La hora es <strong>requerida</strong>
            </mat-error>
        </mat-form-field>
        <div class="flex justify-center">
        <button mat-raised-button color="primary" [disabled]="!formGroup.valid || this.confirmado" (click)="guardarReunion()">Guardar</button>
        </div>
      </form>
    </mat-card> 
  `,
})
export class FormMeetingComponent implements OnInit {

  public formGroup!: FormGroup;
  public confirmado!: boolean;
  public fechaActual: any;
  public listReuniones: Reunion[] = [];

  constructor(private fb: FormBuilder,
              private router: Router,
              private firestore: FirestoreService,
              private snackBar: MatSnackBar,
              private taskService: MyTaskService) {
  }

  crearForm(){
    this.formGroup = this.fb.group({
        titulo: ["", Validators.required],
        integrantes: ["", Validators.required],
        fecha: ["", Validators.required],
        hora: ["", Validators.required]
    })
  }

  ngOnInit(){
    this.obtenerFechaActual()
    this.crearForm();
    this.confirmado = false;
  }

  public obtenerFechaActual(){
    let date = new Date()
    let day = `${(date.getDate())}`.padStart(2,'0');
    let month = `${(date.getMonth()+1)}`.padStart(2,'0');
    let year = date.getFullYear();
    
    this.fechaActual =`${year}-${month}-${day}`;
  }

  guardarReunion(){
    if (this.formGroup.valid){
      this.crearReunion();
      this.confirmado = true;
      setTimeout(() => {
        this.router.navigate(['home'])
      }, 2000);
    }
  }

  crearReunion(){
    let date = new Date();
    let idGenerator = date.getDay()+date.getMonth()+date.getFullYear()+date.getHours()+date.getMinutes()+date.getSeconds()
   
    const REUNION: Reunion = {
      id: idGenerator,
      titulo: this.formGroup.value.titulo,
      integrantes: this.formGroup.value.integrantes,
      fecha: this.formGroup.value.fecha,
      hora: this.formGroup.value.hora,
    }

    localStorage.getItem('misReuniones')=== null ? this.listReuniones = [] : this.listReuniones = JSON.parse(localStorage.getItem('misReuniones') || "")
    this.listReuniones.push(REUNION);
    localStorage.setItem('misReuniones', JSON.stringify(this.listReuniones))
    
    this.snackBar.open('Reunion Guardada!', 'Cerrar', {
      duration: 2000
    });
  }
}

@NgModule({
  declarations: [
    FormMeetingComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule
  ],
  exports:[FormMeetingComponent]
})
export class FormMeetingModule { }
