import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDividerModule} from '@angular/material/divider';

@Component({
  selector: 'app-footer',
  template: `
    <mat-toolbar >
       <h6>© 2022 lnzambelli@gmail.com</h6>
    </mat-toolbar>
  `,
   styles:[
    'h6 {font-size: small;color:#D4E6F1 }',
    'mat-toolbar { position: fixed; bottom: 0px; background-color: #17202A; border-top: solid 1px #212F3D}'
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
    MatToolbarModule,
    MatDividerModule
  ],
  exports: [
    FooterComponent
  ]
})
export class FooterModule { }
