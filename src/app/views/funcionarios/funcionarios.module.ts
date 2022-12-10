import { ComponentsModule } from './../../components/components.module';
import { MaterialModule } from './../../shared/material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FuncionariosRoutingModule } from './funcionarios-routing.module';
import { FuncionariosComponent } from './funcionarios/funcionarios.component';
import { NgxMaskModule } from 'ngx-mask';
import { ClientesComponent } from '../clientes/clientes/clientes.component';



@NgModule({
  declarations: [
    FuncionariosComponent

  ],
  imports: [
    CommonModule,
    FuncionariosRoutingModule,
    MaterialModule,
    ComponentsModule,
    NgxMaskModule.forChild()
  ]
})
export class FuncionariosModule { }
