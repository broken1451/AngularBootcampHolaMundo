import { Component, Input, OnDestroy, OnInit, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';


@Component({
  selector: 'app-saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.scss']
})
export class SaludoComponent implements OnInit, OnDestroy, OnChanges {
  
  // Reibimos el valor desde el componente padre
  @Input() nombre!: string;

  // Recibimos el valor desde el componente padre para emitir un evento
  @Output() mensajeEmmiter: EventEmitter<string> = new  EventEmitter<string>();

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log(`Saludo ha cambiado ${changes}`);
    console.log(changes)

  }


  ngOnInit(): void {
    console.log('ngOnInit saludo')
  }

  /*
  * Ejemplo pra gestionar un evento de tipo click en el dom
  */
   enviarMensajeAlPadre(){
    // alert(`Hola ${this.nombre}, esto es una alerta`)
    this.mensajeEmmiter.emit(`Hola ${this.nombre}, esto es una alerta`)
   }

     
  ngOnDestroy(): void {
    console.log('ngOnDestroy saludo')
  }
}

// Orden de ciclo de vida
// *1. ngOnChanges
// *2. NgOnInit
// 3. ngAfterContentInit
// 4. ngAfterContentChecked
// 5. ngAfterViewInit
// 6. ngAfterViewChecked
// 7. ngAfterContentChecked
// 8. ngAfterViewChecked
// *9. ngOnDestroy


