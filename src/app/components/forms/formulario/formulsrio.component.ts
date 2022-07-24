import { Component, OnInit } from '@angular/core';

// ejemplo basico de form reactivo
import { FormBuilder, FormGroup } from '@angular/forms';


{FormGroup}

@Component({
  selector: 'app-formulsrio',
  templateUrl: './formulsrio.component.html',
  styleUrls: ['./formulsrio.component.scss']
})
export class FormularioComponent implements OnInit {

  // definimos el formulario
  // public form!: FormGroup;
  public form: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      nombre: [''],
      apellido: [''],
      email: [''],
      telefono: [''],
      direccion: ['']
    });

    // nos suscribimos a os cambios q ocurran en el formulario y lo mostramos por consola
    this.form.valueChanges.subscribe(form => {
      console.log(form)
    })

  }

}
