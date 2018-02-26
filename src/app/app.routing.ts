import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

//Importar componentes
import{ EmpleadosComponent }  from './empleados/empleados.component';
import{ FrutasComponent }  from './frutas/frutas.component';


//Variable que no va a cambiar
const appRoutes: Routes = [
  {path: '', component: EmpleadosComponent},//Ruta inicial(Cuando url no tiene nada, carga componente empleado)
  {path: 'empleados', component: EmpleadosComponent},
  {path: 'frutas', component: FrutasComponent},
  {path: '**', component: EmpleadosComponent}//Cuando exista un error, carga el componente empleado.
];

export const appRoutingProviders: any[] = [];//Procedimiento que necesita angular.

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
