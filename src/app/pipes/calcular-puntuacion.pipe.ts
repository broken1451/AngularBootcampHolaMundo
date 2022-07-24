import { Pipe, PipeTransform } from '@angular/core';
import { Jugador } from '../models/jugador.interface';

@Pipe({
  name: 'calcularPuntuacion'
})
export class CalcularPuntuacionPipe implements PipeTransform {

  transform(value: Jugador, arg?:any): string {
    console.log({value,arg})

    let puntuacionTotal: number = 0;
    value.puntos.forEach(puntos=>{
      puntuacionTotal = puntuacionTotal + puntos;
    })
      
    return `${value.nombre} ha conseguido ${puntuacionTotal} puntos en total`;
  }

}
