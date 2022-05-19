import { Reunion } from './../components/meeting/reunion';
import { Injectable } from '@angular/core';
import { Tareas } from '../components/task/tareas';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyTaskService {

  private arrTareas: Array<Tareas> = [];
  private arrTareas$: Subject<Array<Tareas>> = new Subject();
  private arrReuniones: Array<Reunion> = [];
  private arrReuniones$: Subject<Array<Reunion>> = new Subject();
  private fechaSeleccionada: Date = new Date;
  private fechaSeleccionada$: Subject<Date> = new Subject();

  constructor() { }

  agregarTarea(nuevaTarea: Tareas){
      this.arrTareas.push(nuevaTarea);
      this.arrTareas$.next(this.arrTareas);
  }

  agregarReunion(nuevaReunion: Reunion){
    this.arrReuniones.push(nuevaReunion);
    this.arrReuniones$.next(this.arrReuniones);
  }

  agregarFecha(fecha: Date){
      this.fechaSeleccionada$.next(fecha);
  }

  getTodasLasTareas():Observable<any>{
    return this.arrTareas$.asObservable();
  }

  getTodasLasReuniones():Observable<any>{
    return this.arrReuniones$.asObservable();
  }

  getFechaSeleccionada():Observable<Date>{
    return this.fechaSeleccionada$.asObservable();
  }

}
