import { Component, OnInit } from '@angular/core';

// ejemplo basico de form reactivo anidado
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-formulario-array',
  templateUrl: './formulario-array.component.html',
  styleUrls: ['./formulario-array.component.scss']
})
export class FormularioArrayComponent implements OnInit {

  // definimos el formulario
  // public form!: FormGroup;
  public form: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      nombre: [''],
      apellidos: [''],
      telefonos: this.fb.array([]),// inicializamos la lusta de telfonos vacia
    })
  }

  // metodo getter para obtener el formArray de la lista de tlfs
  get tlfFoms(): FormArray{
    return this.form.get('telefonos') as FormArray;
  }

  // Metodo para agregar telefonos a la lista
  addTlfs(){
    // Creamos un grupo telefono
    const telefonoNuevo = this.fb.group({
      prefijo:[''],
      numero:['']
    });

    // agregamos el grupo a lista de tlfs
    this.tlfFoms.push(telefonoNuevo)
  }

  // metodo para eliminar tlfs de la lista
  removeTlf(index: number){
    this.tlfFoms.removeAt(index);
  }

}
