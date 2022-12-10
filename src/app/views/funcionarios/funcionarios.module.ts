import { ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from './../../components/components.module';
import { MaterialModule } from './../../shared/material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FuncionariosRoutingModule } from './funcionarios-routing.module';
import { FuncionariosComponent } from './funcionarios/funcionarios.component';
import { NgxMaskModule } from 'ngx-mask';
import { NewFuncionarioComponent } from './new-funcionario/new-funcionario.component';



@NgModule({
  declarations: [
    FuncionariosComponent,
    NewFuncionarioComponent
  ],
  imports: [
    CommonModule,
    FuncionariosRoutingModule,
    MaterialModule,
    ComponentsModule,
    NgxMaskModule.forChild(),
   ReactiveFormsModule
  ]
})
export class FuncionariosModule { }
