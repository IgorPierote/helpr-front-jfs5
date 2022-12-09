import { FuncionarioService } from 'src/app/services/funcionario.service';
import { Funcionario } from './../../../models/funcionario';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-funcionarios',
  templateUrl: './funcionarios.component.html',
  styleUrls: ['./funcionarios.component.css']
})
export class FuncionariosComponent implements OnInit {
  constructor(private funcionarioService: FuncionarioService) {}
  displayedColumns: string[] = [
    'foto',
    'id',
    'nome',
    'cpf',
    'email',
    'cargo',
    'editar',
    'detalhes',
  ];
  dataSource: Funcionario[] = [];

  ngOnInit(): void {
    this.initializeTable();
  }
 

  public initializeTable() : void {
    this.funcionarioService.findAll().subscribe(funcionarios => {
      this.dataSource = funcionarios;
    })
  }
}
