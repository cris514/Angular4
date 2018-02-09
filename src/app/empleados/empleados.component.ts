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

     //Ejemplo para el uso de directiva ngIf
     public trabajador_externo:boolean;

     constructor(){
//Definimos lo valores que llevaran nuestros objetos de la clase Empleados(empleados.ts)
       this.empleados = new Empleados( "Primer empleado",30,"Chofer",true);
       this.trabajadores = [
         new Empleados( "Primer trabajador",29,"Programador",true),
         new Empleados( "segundo trabajador",35,"Diseñador",true)
       ];

       //Asignando valor a trabajador_externo.
       //Uso de directiva ngIf
       this.trabajador_externo = true;

     }

     ngOnInit(){

       console.log(this.empleados);
       console.log(this.trabajadores);

       }
       //cambio para el uso del botton
      cambiarExterno(valor){
        this.trabajador_externo = valor;
      }


}
