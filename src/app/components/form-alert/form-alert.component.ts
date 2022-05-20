import { Alert } from './../alert/alert';
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
  selector: 'app-form-alert',
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
          <mat-label>Ingrese un dia</mat-label>
          <input matInput formControlName="dia" type="number">
          <mat-error *ngIf="formGroup.controls['dia'].hasError('required')">
              El dia es <strong>requerido</strong>
          </mat-error>
          <mat-error *ngIf="formGroup.controls['dia'].hasError('min')">
              El dia debe ser un número entre <strong>1 y 31</strong>
          </mat-error>
          <mat-error *ngIf="formGroup.controls['dia'].hasError('max')">
              El dia debe ser un número entre <strong>1 y 31</strong>
          </mat-error>
        </mat-form-field>
        <mat-form-field class="w-100 mb-8">
          <mat-label>Ingrese un mes</mat-label>
          <input matInput formControlName="mes" type="number">
          <mat-error *ngIf="formGroup.controls['mes'].hasError('required')">
              El mes es <strong>requerido</strong>
            </mat-error>
            <mat-error *ngIf="formGroup.controls['mes'].hasError('min')">
              El mes debe ser un número entre <strong>1 y 12</strong>
            </mat-error>
            <mat-error *ngIf="formGroup.controls['mes'].hasError('max')">
              El mes debe ser un número entre <strong>1 y 12</strong>
            </mat-error>
        </mat-form-field>
        <div class="flex justify-center">
        <button mat-raised-button [disabled]="!formGroup.valid || this.confirmado" (click)="guardarAlerta()">Guardar</button>
        </div>
      </form>
    </mat-card> 
  `,
  styles:[
    'mat-card {background-color: #212F3C; border-radius: 0}',
    'mat-card, input, mat-error,mat-label, {color: #D4E6F1}',
    'button {background-color: #D4E6F1; color: #212F3C; border: 0.5px solid #D4E6F1}',
    '.mat-raised-button[disabled] {background-color: #212F3C; color: #D4E6F1}'
  ],
})
export class FormAlertComponent implements OnInit {

  public formGroup!: FormGroup;
  public confirmado!: boolean;
  public fechaActual: any;
  public listAlertas: Alert[] = [];

  constructor(private fb: FormBuilder,
              private router: Router,
              private firestore: FirestoreService,
              private snackBar: MatSnackBar,
              private taskService: MyTaskService) {
  }

  crearForm(){
    this.formGroup = this.fb.group({
        titulo: ["", Validators.required],
        dia: ["", [Validators.required, Validators.min(1),Validators.max(31)]],
        mes: ["", [Validators.required, Validators.min(1),Validators.max(12)]],
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

  guardarAlerta(){
    if (this.formGroup.valid){
      this.crearAlerta();
      this.confirmado = true;
      setTimeout(() => {
        this.router.navigate(['home'])
      }, 2000);
    }
  }

  crearAlerta(){
    let date = new Date();
    let idGenerator = date.getDay()+date.getMonth()+date.getFullYear()+date.getHours()+date.getMinutes()+date.getSeconds()
   
    const ALERTA: Alert = {
      id: idGenerator,
      titulo: this.formGroup.value.titulo,
      dia: this.formGroup.value.dia,
      mes: this.formGroup.value.mes,
    }

    localStorage.getItem('misAlertas')=== null ? this.listAlertas = [] : this.listAlertas = JSON.parse(localStorage.getItem('misAlertas') || "")
    this.listAlertas.push(ALERTA);
    localStorage.setItem('misAlertas', JSON.stringify(this.listAlertas))
    
    this.snackBar.open('Alerta Guardada!', 'Cerrar', {
      duration: 2000
    });
  }

}


@NgModule({
  declarations: [FormAlertComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule
  ],
  exports: [FormAlertComponent]
})
export class FormAlertModule { }
