import { Component, OnInit } from '@angular/core';

// creamos un tipo base para el ejemplo
export type Producto ={
  nombre: string;
  precio: number;
  desc: string;
}

@Component({
  selector: 'app-lista-basica',
  templateUrl: './lista-basica.component.html',
  styleUrls: ['./lista-basica.component.scss']
})
export class ListaBasicaComponent implements OnInit {

  public listaElementos: Producto[] = [];
  public cargando: boolean = true;
  public option: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.listaElementos = [
      {
      nombre: 'Leche',precio:10, desc:'Leche entera'
    },
    {
      nombre: 'Carne',precio:20, desc:'Carne de Cordero'
    },
  ]
  }

  cambiarCargando(){
    this.cargando = !this.cargando
  }

  escogerOption(opt: number){
    this.option = opt; // el valor cambia, implica un cambio en los elementos renderizados
  }

}
