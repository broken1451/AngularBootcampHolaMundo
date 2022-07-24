import { Component, OnInit } from '@angular/core';
// ejemplo basico de form reactivo anidado
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario-validado',
  templateUrl: './formulario-validado.component.html',
  styleUrls: ['./formulario-validado.component.scss']
})
export class FormularioValidadoComponent implements OnInit {

  // definimos el formulario
  // public form!: FormGroup;
  public form: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder) { }

  get nombre(){
    return this.form.get('nombre');
  }

  get apellidos(){
    return this.form.get('apellidos');
  }

  get edad(){
    return this.form.get('edad');
  }

  get email(){
    return this.form.get('email');
  }

  get password(){
    return this.form.get('password');
  }

  get acepta(){
    return this.form.get('acepta');
  }


  ngOnInit(): void {
    this.form = this.fb.group({
      nombre: ['', Validators.required],
      apellidos: [''],
      // compose recibe un array de validatos
      edad: ['',Validators.compose([Validators.required, Validators.min(18), Validators.max(99)])],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z]*')])],
      acepta: [false, Validators.requiredTrue]

    });
  }


  // metodo de submit 
  enviarFom(){
    if (this.form.valid) {
      console.log(this.form.value)
      this.form.reset();
    }
  }
}
