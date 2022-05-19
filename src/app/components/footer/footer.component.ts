import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';

@Component({
  selector: 'app-footer',
  template: `
    <mat-toolbar color="primary">
       <h6>© 2022 Acerma</h6>
    </mat-toolbar>
  `,
   styles:[
    'h6 {font-size: small}',
    'mat-toolbar { position: fixed; bottom:  0px;}'
  ],
  
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

@NgModule({
  declarations: [
    FooterComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule
  ],
  exports: [
    FooterComponent
  ]
})
export class FooterModule { }
