import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ComunicacionService {

  constructor() { }
   private datoSource = new BehaviorSubject<string>("");  
  datoActual = this.datoSource.asObservable();

  enviarDato(dato: string) {
    this.datoSource.next(dato);
  }
}
