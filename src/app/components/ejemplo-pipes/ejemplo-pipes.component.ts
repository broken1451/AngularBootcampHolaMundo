import { Component, OnInit } from '@angular/core';
import { Jugador } from 'src/app/models/jugador.interface';
import { IContacto } from '../../models/Contacto.interface';

@Component({
  selector: 'app-ejemplo-pipes',
  templateUrl: './ejemplo-pipes.component.html',
  styleUrls: ['./ejemplo-pipes.component.scss']
})
export class EjemploPipesComponent implements OnInit {

  public dob: Date = new Date(1991,9,14);
  public cambio: boolean = true;
  public nombre: string = 'Adrian';
  public numberPI: number = 3.1415926535897;
  public precioCart: number = 100;
  public persona: IContacto = {
    id:0,
    nombre: 'adrian',
    apellidos:'Bravo',
    edad: 29,
    email:'adrain@gmail.com'
  }
  public cantidad: number = 0.35;
  public textLargo: string ='lorfdsdfsdfsd fdsfsdfs dlorfdsdfsdfsdlorfdsdfsdfsd  lorfdsdfsdfsd lorfdsdfsdfsd lorfdsdfsdfsd lorfdsdfsdfsd lorfdsdfsdfsd lorfdsdfsdfsd'

  // ejemplo parapipe calcular puntuacion
  public jugador1: Jugador ={
    nombre:'Adrian',
    puntos: [10,30,40,0]
  }

  public jugador2: Jugador ={
    nombre:'Pepe',
    puntos: [0,80,10,5]
  }

  constructor() { }

  ngOnInit(): void {
  }

  get dateFormat(){
    return this.cambio ? 'shortDate':'fullDate'
  }

  cambiarFormato(){
    this.cambio = !this.cambio
  }

}
