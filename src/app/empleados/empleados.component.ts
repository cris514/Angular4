import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css'],
  template: `
    <h2>
   {{ titulo_empleados }}!
    </h2>

    `
})
export class EmpleadosComponent  {
    public titulo_empleados = 'EMPLEADOS';


}
