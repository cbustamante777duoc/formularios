import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrincipalComponent } from './principal.component';
import { FormulariobasicosComponent } from './formulariobasico/formulariobasicos.component';
import { FormularioreactivosComponent } from './formularioreactivo/formularioreactivos.component';
import { MenuComponent } from './menu/menu.component';



@NgModule({
  declarations: [
    PrincipalComponent,
    FormulariobasicosComponent,
    FormularioreactivosComponent,
    MenuComponent

  ],
  imports: [
    CommonModule
  ]
})
export class PrincipalModule { }
