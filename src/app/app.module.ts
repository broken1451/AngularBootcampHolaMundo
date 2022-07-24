import { LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SaludoComponent } from './components/saludo/saludo.component';

// Modulo personalizados que  exporta  componentes de tipo lista
import { ListModule } from './modules/form/form.module';
import { ListaContactoComponent } from './components/lista-contacto/lista-contacto.component';
import { LoginFormComponent } from './components/forms/login-form/login-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormularioComponent } from './components/forms/formulario/formulsrio.component';
import { FormularioAnidadoComponent } from './components/forms/formulario-anidado/formulario-anidado.component';
import { FormularioArrayComponent } from './components/forms/formulario-array/formulario-array.component';
import { FormularioValidadoComponent } from './components/forms/formulario-validado/formulario-validado.component';

// modulos angular material
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { EjemploPipesComponent } from './components/ejemplo-pipes/ejemplo-pipes.component';
import { MultiplicaPipe } from './pipes/multiplica.pipe';
import { CalcularPuntuacionPipe } from './pipes/calcular-puntuacion.pipe';

// Locale para Pipes
import LocaleCH from "@angular/common/locales/es-CL";
import { registerLocaleData } from '@angular/common';
import { EjemploAnimacionComponent } from './components/ejemplo-animacion/ejemplo-animacion.component';
import { MatButtonModule } from '@angular/material/button';
registerLocaleData(LocaleCH) // Registramos el LOCALE_ID  de 'es-CL para usuarlos en los pipes'

@NgModule({
  declarations: [
    AppComponent,
    SaludoComponent,
    ListaContactoComponent,
    LoginFormComponent,
    FormularioComponent,
    FormularioAnidadoComponent,
    FormularioArrayComponent,
    FormularioValidadoComponent,
    EjemploPipesComponent,
    MultiplicaPipe,
    CalcularPuntuacionPipe,
    EjemploAnimacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // Importamos modulos de formularios de angular
    FormsModule,
    ReactiveFormsModule,
    // Importamos nuestro modulo personalizados
    ListModule,
    // importamos el modulo HttpClientModule para poder hacer peticiones http
    HttpClientModule,
    BrowserAnimationsModule,
    // modulos de angular material
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  providers: [
    // Registramos el locale para q los pipes salgan en el idioma seleccionado
    {
      provide: LOCALE_ID,
      useValue: 'es-CL'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
