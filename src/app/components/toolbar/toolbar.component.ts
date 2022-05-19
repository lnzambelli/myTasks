import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { Router } from '@angular/router';
import {MatTooltipModule} from '@angular/material/tooltip';
import { MatSnackBar } from '@angular/material/snack-bar';
import {MatDividerModule} from '@angular/material/divider';

@Component({
  selector: 'app-toolbar',
  template: `
  <mat-toolbar class="flex w-100 justify-between" style="position: sticky; top: 0px; z-index: 2">
      <span (click)="irInicio()" style="cursor: pointer">Mis Tareas</span>
      <div> 
            <button mat-icon-button (click)="abrirFormularioTarea()" matTooltip="Agregar">
              <mat-icon>add</mat-icon>
            </button>
            <button mat-icon-button (click)="borrarTodo()" matTooltip="Resetear">
              <mat-icon>playlist_remove</mat-icon>
            </button>
      </div>
  </mat-toolbar>
  <mat-divider style="border-top-color: #212F3D  "></mat-divider>
  `,
  styles:[
    'mat-toolbar {background-color: #17202A}',
    'span,mat-icon { color: #D4E6F1  }'
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToolbarComponent {

  constructor(private router: Router, private snackBar: MatSnackBar) { }

  abrirFormularioTarea(){
      this.router.navigate(['create-task']);
  }
  irInicio(){
    this.router.navigate(['home']);
  }

  borrarTodo(){
    const datosEliminar = this.snackBar.open(`No se podran recuperar los datos, esta seguro de continuar?`, "Si, Eliminar", {duration: 5000});
    datosEliminar.onAction().subscribe(()=>{
      localStorage.removeItem('misReuniones');
      localStorage.removeItem('misTareas')
      this.router.navigate(['home']);
    })
  }
}


@NgModule({
  declarations: [
    ToolbarComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatDividerModule
  ],
  exports:[
    ToolbarComponent
  ]
})
export class ToolbarModule { }