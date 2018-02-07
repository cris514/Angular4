import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-frutas',//Nombre del selector para invocarlo donde queramos.
  template: `
    <h2>
   {{ nombre_componente }}!
    </h2>
    <p>
   {{ listado_frutas  }}!
    </p>
  `
})
export class FrutasComponent {
  public nombre_componente = 'Componente de Frutas';
  public listado_frutas = 'Componente de Frutas2';


}
