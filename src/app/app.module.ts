import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
