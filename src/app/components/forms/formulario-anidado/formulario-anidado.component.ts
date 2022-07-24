import { Component, OnInit } from '@angular/core';

// ejemplo basico de form reactivo anidado
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-formulario-anidado',
  templateUrl: './formulario-anidado.component.html',
  styleUrls: ['./formulario-anidado.component.scss']
})
export class FormularioAnidadoComponent implements OnInit {

  // definimos el formulario
  // public form!: FormGroup;
  public form: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder) { }


  ngOnInit(): void {
    // agrupacion
    const telefonoFijo = this.fb.group({
      prefijo:[''],
      numero:['']
    });

    const telefonoMovil = this.fb.group({
      prefijo:[''],
      numero:['']
    })

    // agrupacion de formulario que contienedos agrupaciones
    this.form = this.fb.group({
      fijo: telefonoFijo,
      movil: telefonoMovil
    })
  }

}
