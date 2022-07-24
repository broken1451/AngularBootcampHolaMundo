import { Component, OnDestroy, OnInit } from '@angular/core';
import { ContactoService } from '../../services/contacto.service';
import { IContacto } from '../../models/Contacto.interface';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-lista-contacto',
  templateUrl: './lista-contacto.component.html',
  styleUrls: ['./lista-contacto.component.scss']
})
export class ListaContactoComponent implements OnInit, OnDestroy {

  public contactos: IContacto[] = [];
  public contacto: IContacto | undefined;

  // subcripcion de Servicio
  public subcription: Subscription | undefined;

  // Inyectamos en el constructor el servicio de contactos
  constructor(private contactoService: ContactoService) { }


  async ngOnInit() {
    try {
      // this.contactos = await this.contactoService.obtenerContactos().finally(()=>console.log('Peticion terminada')); //con promesas
      this.subcription = this.contactoService.obtenerContactos().subscribe((res)=>{
        this.contactos = res;
        console.table(this.contactos)
      })
    } catch (error) {
      console.log('error al recuperar la lista de contactos'),
      console.log(error)
    }
  }

  ngOnDestroy(): void {
    this.subcription?.unsubscribe();
    console.log('destoy')
  }

  async getDatosContacto(contacto: IContacto) {
    try {
      // this.contacto = await this.contactoService.obtenerContactoPorId(contacto.id)?.finally(()=>console.log('Peticion terminada')); // con promesas
     this.subcription = this.contactoService.obtenerContactoPorId(contacto.id)?.subscribe(res => {
        this.contacto = res;
        console.log(this.contacto)
      },(err)=>console.log('err', err));
    } catch (error) {
      console.log('error al recuperar el detalle de contacto'),
      console.log(error)
    }
  }

}
