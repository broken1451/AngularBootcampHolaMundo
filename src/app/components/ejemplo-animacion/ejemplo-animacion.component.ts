import { trigger, state, transition, style, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
{ }

@Component({
  selector: 'app-ejemplo-animacion',
  templateUrl: './ejemplo-animacion.component.html',
  styleUrls: ['./ejemplo-animacion.component.scss'],
  // Metadatos para la anumacion del componente
  animations: [
    trigger('animacion', [
      state('active', style({
        transform: 'translate(10px, 20px)'
      })),
      state('inactive', style({
        transform: 'translate(40px, 50px)'
      })),
      state('subir', style({
        transform: 'translateY(10px)'
      })),
      state('rotar', style({
        transform: 'rotate(90deg)'
      })),
      state('ampliar', style({
        transform: 'scale(2,2)',
        backgroundColor: 'green'
      })),
      state('original', style({
        transform: 'scale(1,1)'
      })),
      transition('inactive => active', animate('1000ms ease-in')),
      transition('active => inactive', animate('1000ms ease-out')),
      transition('active => subir', animate('1000ms ease-in')),
      transition('subir => active', animate('1000ms ease-out')),
      transition('active => rotar', animate('1000ms ease-in')),
      transition('subir => rotar', animate('1000ms ease-in')),
      transition('rotar => active', animate('1000ms ease-out')),
      transition('inactive => subir', animate('1000ms ease-in')),
      transition('subir => inactive', animate('1000ms ease-out')),
      transition('inactive => rotar', animate('1000ms ease-in')),
      transition('rotar => inactive', animate('1000ms ease-out')),
      transition('rotar => subir', animate('1000ms ease-out')),
    ]),
    trigger('rotaciones',[
      state('active', style({
        transform: 'translate(10px, 20px)'
      })),
    ])
  ]
})
export class EjemploAnimacionComponent implements OnInit {

  public state = 'inactive';

  constructor() { }

  ngOnInit(): void {
    // setInterval(() => {
      // if (this.state == 'active') {
      //   this.state = 'inactive';
      // } else {
      //   this.state = 'active';
      // }
    // }, 500);

  }
  cambiarStateActive(){
    if (this.state == 'active') {
      this.state = 'inactive';
    } else {
      this.state = 'active';
    }
  }

  changeSize(){
    if (this.state == 'original') {
      this.state = 'ampliar';
    } else {
      this.state = 'original';
    }
  }

  subir(){
    this.state = 'subir';
  }

  rotar(){
    this.state = 'rotar';
  }
}
