import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';//Necesario para utilizar el two way data-binding.
//Importacion de los componentes.
import { AppComponent } from './app.component';
import { FrutasComponent } from './frutas/frutas.component';
import { EmpleadosComponent } from './empleados/empleados.component';



//Declaracion de los nombres de los componenetes.
@NgModule({
  declarations: [
    AppComponent,
    FrutasComponent,
    EmpleadosComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule//Necesario para utilizar el two way data-binding.
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
