import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private firestore: AngularFirestore ) { }

  public guardar(formContact: any, nombreColeccion: string): Promise<any>{
    return this.firestore.collection(nombreColeccion).add(formContact);
  }

  public obtenerNuevasReuniones(): Observable<any>{
      return this.firestore.collection('Reunion').snapshotChanges();
  }

  public obtenerNuevasTareas(): Observable<any>{
    return this.firestore.collection('Tarea').snapshotChanges();
  }

  public eliminarReunion(id: string): Promise<any>{
    return this.firestore.collection('Reunion').doc(id).delete();
  }

  public eliminarTarea(id: string): Promise<any>{
    return this.firestore.collection('Tarea').doc(id).delete();
  }

}
