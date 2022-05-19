import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public cargando!: boolean;

  constructor() { }

  ngOnInit() {
    this.cargando=false;
    setInterval(() => {
      this.cargando=true;
    }, 1000);
  }
}