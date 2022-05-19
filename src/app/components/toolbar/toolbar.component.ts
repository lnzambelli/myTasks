import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { Router } from '@angular/router';
import {MatTooltipModule} from '@angular/material/tooltip';

@Component({
  selector: 'app-toolbar',
  template: `
  <mat-toolbar color="primary" class="flex w-100 justify-between" style="position: sticky; top: 0px; z-index: 2">
      <span (click)="irInicio()" style="cursor: pointer">Mis Tareas</span>
      <div> 
            <button mat-icon-button (click)="abrirFormularioTarea()" matTooltip="Agregar">
              <mat-icon>add</mat-icon>
            </button>
            <button mat-icon-button (click)="salir()" matTooltip="Salir">
              <mat-icon>logout</mat-icon>
            </button>
      </div>
  </mat-toolbar>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToolbarComponent {

  constructor(private router: Router) { }

  abrirFormularioTarea(){
      this.router.navigate(['create-task']);
  }
  irInicio(){
    this.router.navigate(['home']);
  }

  salir(){
      sessionStorage.removeItem("usuario");
      sessionStorage.clear();
      this.router.navigate(['login']);
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
    MatTooltipModule
  ],
  exports:[
    ToolbarComponent
  ]
})
export class ToolbarModule { }
