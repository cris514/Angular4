import { Component, OnInit } from '@angular/core';
import { Empleados} from './empleados';//Importamos clase Empleados.

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css'],

})
export class EmpleadosComponent  {
     titulo_empleados = 'COMPONENTE-EMPLEADOS';

     //Objeto instalcia de la clase Empleados
     public empleados:Empleados;
     public trabajadores:Array<Empleados>;

     constructor(){
//Definimos lo valores que llevaran nuestros objetos de la clase Empleados(empleados.ts)
       this.empleados = new Empleados( "Primer empleado",30,"Chofer",true);
       this.trabajadores = [
         new Empleados( "Primer trabajador",29,"Programador",true),
         new Empleados( "segundo trabajador",35,"Diseñador",true)
       ];
     }




     ngOnInit(){

       console.log(this.empleados);
       console.log(this.trabajadores);

       }
}
