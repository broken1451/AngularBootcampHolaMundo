import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// importamos el mock
import { CONTACTOS } from '../mocks/contactos.mock';
import { IContacto } from '../models/Contacto.interface';

// importamos Observable de rxjs
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactoService {

  constructor(private httpClient: HttpClient) { }

  // con promesas
  // obtenerContactos(): Promise<IContacto[]> {
  //   // return CONTACTOS; // nos devuelve una lista de contacto
  //   return new Promise((resolve, reject)=>{
  //     resolve(CONTACTOS)
  //   })
  // }

  // obtenerContactoPorId(id: number): Promise<IContacto> | undefined {
  //   // Buscamos un contacto por ID dentro de la lista de cotactos del mock
  //   // const contacto = CONTACTOS.find((c: IContacto) => c.id == id);
  //   // console.log(contacto)
  //   // if (contacto) {
  //   //   return contacto;
  //   // } else {
  //   //   return;
  //   // }
  //   return new Promise((resolve, reject)=>{
  //     const contacto = CONTACTOS.find((c: IContacto) => c.id == id);
  //     if (contacto) {
  //       resolve(contacto)
  //     } else {
  //       reject(null);
  //     }
   
  //   })
  // }
  // con promesas


  // con observables
  obtenerContactos(): Observable<IContacto[]> {
    // return CONTACTOS; // nos devuelve una lista de contacto
    // return new Promise((resolve, reject)=>{
    //   resolve(CONTACTOS)
    // })
    let observable: Observable<IContacto[]> = new Observable((observer => {
      observer.next(CONTACTOS); // Emitir un valor a todo componente suscrito
      observer.complete(); //No emitimos mas valores
    }))
    // return of(CONTACTOS);
    return observable;
  }

  obtenerContactoPorId(id: number): Observable<IContacto> | undefined {
    // Buscamos un contacto por ID dentro de la lista de cotactos del mock
    // const contacto = CONTACTOS.find((c: IContacto) => c.id == id);
    // console.log(contacto)
    // if (contacto) {
    //   return contacto;
    // } else {
    //   return;
    // }
    const contacto = CONTACTOS.find((c: IContacto) => c.id == id);
    let observable: Observable<IContacto> = new Observable((observer => {
      observer.next(contacto); // Emitir un valor a todo componente suscrito
      observer.complete(); //No emitimos mas valores
    }))
      if (contacto) {
         return observable;
      } else {
         return;
      }
  }
  // con observables
}
